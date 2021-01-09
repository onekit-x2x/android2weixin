import android2weixin from 'android2weixin';
import {OnekitPage} from 'android2weixin';
const Manifest = android2weixin.android.Manifest
const Intent = android2weixin.android.content.Intent
const PackageManager = android2weixin.android.content.pm.PackageManager
const Build = android2weixin.android.os.Build
const Bundle = android2weixin.android.os.Bundle
const TextUtils = android2weixin.android.text.TextUtils
const Log = android2weixin.android.util.Log
const View = android2weixin.android.view.View
const Button = android2weixin.android.widget.Button
const ImageView = android2weixin.android.widget.ImageView
const LinearLayout = android2weixin.android.widget.LinearLayout
const TextView = android2weixin.android.widget.TextView
const Toast = android2weixin.android.widget.Toast
const AppCompatActivity = android2weixin.androidx.appcompat.app.AppCompatActivity
const ActivityCompat = android2weixin.androidx.core.app.ActivityCompat
const TXLiteAVCode = android2weixin.com.tencent.liteav.TXLiteAVCode
const TXBeautyManager = android2weixin.com.tencent.liteav.beauty.TXBeautyManager
const Constant = android2weixin.com.tencent.liteav.debug.Constant
const GenerateTestUserSig = android2weixin.com.tencent.liteav.debug.GenerateTestUserSig
const R = android2weixin.com.tencent.rtc.R
const TXCloudVideoView = android2weixin.com.tencent.rtmp.ui.TXCloudVideoView
const TRTCCloud = android2weixin.com.tencent.trtc.TRTCCloud
const TRTCCloudDef = android2weixin.com.tencent.trtc.TRTCCloudDef
const TRTCCloudListener = android2weixin.com.tencent.trtc.TRTCCloudListener
const WeakReference = android2weixin.java.lang.ref.WeakReference
const ArrayList = android2weixin.java.util.ArrayList
const List = android2weixin.java.util.List
const TRTCRoleAnchor = android2weixin.com.tencent.trtc.TRTCCloudDef.TRTCRoleAnchor
const TRTC_APP_SCENE_VIDEOCALL = android2weixin.com.tencent.trtc.TRTCCloudDef.TRTC_APP_SCENE_VIDEOCALL
class RTCActivity extends AppCompatActivity{
  constructor(){
    super()
    this.mTitleText=null
    this.mLocalPreviewView=null
    this.mBackButton=null
    this.mMuteVideo=null
    this.mMuteAudio=null
    this.mSwitchCamera=null
    this.mLogInfo=null
    this.mVideoMutedTipsView=null
    this.mTRTCCloud=null
    this.mIsFrontCamera = true
    this.mRemoteUidList=null
    this.mRemoteViewList=null
    this.mGrantedCount = 0
    this.mUserCount = 0
    this.mLogLevel = 0
    this.mRoomId=null
    this.mUserId=null
  }
  onCreate(savedInstanceState ){
    super.onCreate(savedInstanceState)
    this.setContentView(R.layout.activity_rtc)
    this.getSupportActionBar().hide()
    this.handleIntent()
    if(this.checkPermission()){
      this.initView();
      this.enterRoom();
    }
  }
  handleIntent(){
    var intent = this.getIntent()
    if(null != intent){
      if(intent.getStringExtra(Constant.USER_ID) != null){
        mUserId = intent.getStringExtra(Constant.USER_ID);
      }
      if(intent.getStringExtra(Constant.ROOM_ID) != null){
        mRoomId = intent.getStringExtra(Constant.ROOM_ID);
      }
    }
  }
  initView(){
    mTitleText = this.findViewById(R.id.trtc_tv_room_number)
    mBackButton = this.findViewById(R.id.trtc_ic_back)
    mLocalPreviewView = this.findViewById(R.id.trtc_tc_cloud_view_main)
    mMuteVideo = this.findViewById(R.id.trtc_btn_mute_video)
    mMuteAudio = this.findViewById(R.id.trtc_btn_mute_audio)
    mSwitchCamera = this.findViewById(R.id.trtc_btn_switch_camera)
    mLogInfo = this.findViewById(R.id.trtc_btn_log_info)
    mVideoMutedTipsView = this.findViewById(R.id.ll_trtc_mute_video_default)
    if(!TextUtils.isEmpty(mRoomId)){
      mTitleText.setText(mRoomId);
    }
    mBackButton.setOnClickListener(this)
    mMuteVideo.setOnClickListener(this)
    mMuteAudio.setOnClickListener(this)
    mSwitchCamera.setOnClickListener(this)
    mLogInfo.setOnClickListener(this)
    mRemoteUidList = new ArrayList()
    mRemoteViewList = new ArrayList()
    mRemoteViewList.add(this.findViewById(R.id.trtc_tc_cloud_view_1))
    mRemoteViewList.add(this.findViewById(R.id.trtc_tc_cloud_view_2))
    mRemoteViewList.add(this.findViewById(R.id.trtc_tc_cloud_view_3))
    mRemoteViewList.add(this.findViewById(R.id.trtc_tc_cloud_view_4))
    mRemoteViewList.add(this.findViewById(R.id.trtc_tc_cloud_view_5))
    mRemoteViewList.add(this.findViewById(R.id.trtc_tc_cloud_view_6))
  }
  enterRoom(){
    mTRTCCloud = TRTCCloud.sharedInstance(this.getApplicationContext())
    mTRTCCloud.setListener(new TRTCCloudImplListener(this))
    var trtcParams = new TRTCParams()
    trtcParams.sdkAppId = GenerateTestUserSig.SDKAPPID
    trtcParams.userId = mUserId
    trtcParams.roomId = Integer.parseInt(mRoomId)
    trtcParams.userSig = GenerateTestUserSig.genTestUserSig(trtcParams.userId)
    trtcParams.role = TRTCRoleAnchor
    mTRTCCloud.enterRoom(trtcParams,TRTC_APP_SCENE_VIDEOCALL)
    mTRTCCloud.startLocalAudio()
    mTRTCCloud.startLocalPreview(mIsFrontCamera,mLocalPreviewView)
    var beautyManager = mTRTCCloud.getBeautyManager()
    beautyManager.setBeautyStyle(Constant.BEAUTY_STYLE_NATURE)
    beautyManager.setBeautyLevel(5)
    beautyManager.setWhitenessLevel(1)
    var encParam = new TRTCVideoEncParam()
    encParam.videoResolution = TRTCCloudDef.TRTC_VIDEO_RESOLUTION_640_360
    encParam.videoFps = Constant.VIDEO_FPS
    encParam.videoBitrate = Constant.RTC_VIDEO_BITRATE
    encParam.videoResolutionMode = TRTCCloudDef.TRTC_VIDEO_RESOLUTION_MODE_PORTRAIT
    mTRTCCloud.setVideoEncoderParam(encParam)
  }
  onDestroy(){
    super.onDestroy()
    this.exitRoom()
  }
  exitRoom(){
    mTRTCCloud.stopLocalAudio()
    mTRTCCloud.stopLocalPreview()
    mTRTCCloud.exitRoom()
    if(mTRTCCloud != null){
      mTRTCCloud.setListener(null);
    }
    mTRTCCloud = null
    TRTCCloud.destroySharedInstance()
  }
  checkPermission(){
    if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.M){
      var permissions = new ArrayList();
      if(PackageManager.PERMISSION_GRANTED != ActivityCompat.checkSelfPermission(this,Manifest.permission.WRITE_EXTERNAL_STORAGE)){
        permissions.add(Manifest.permission.WRITE_EXTERNAL_STORAGE);
      }
      if(PackageManager.PERMISSION_GRANTED != ActivityCompat.checkSelfPermission(this,Manifest.permission.CAMERA)){
        permissions.add(Manifest.permission.CAMERA);
      }
      if(PackageManager.PERMISSION_GRANTED != ActivityCompat.checkSelfPermission(this,Manifest.permission.RECORD_AUDIO)){
        permissions.add(Manifest.permission.RECORD_AUDIO);
      }
      if(PackageManager.PERMISSION_GRANTED != ActivityCompat.checkSelfPermission(this,Manifest.permission.READ_EXTERNAL_STORAGE)){
        permissions.add(Manifest.permission.READ_EXTERNAL_STORAGE);
      }
      if(permissions.size() != 0){
        ActivityCompat.requestPermissions(this,permissions.toArray(new [0]),REQ_PERMISSION_CODE);
        return false;
      }
    }
    return true
  }
  onRequestPermissionsResult(requestCode ,permissions ,grantResults ){
    super.onRequestPermissionsResult(requestCode,permissions,grantResults)
    if(requestCode == REQ_PERMISSION_CODE){
      for(var ret of grantResults){
          if(PackageManager.PERMISSION_GRANTED == ret)mGrantedCount++
        };
      if(mGrantedCount == permissions.length){
        this.initView();
        this.enterRoom();
      } else {
        Toast.makeText(this,this.getString(R.string.rtc_permisson_error_tip),Toast.LENGTH_SHORT).show();
      }
      mGrantedCount = 0;
    }
  }
  onClick(v ){
    var id = v.getId()
    if(id == R.id.trtc_ic_back){
      this.finish();
    } else if(id == R.id.trtc_btn_mute_video){
      this.muteVideo();
    } else if(id == R.id.trtc_btn_mute_audio){
      this.muteAudio();
    } else if(id == R.id.trtc_btn_switch_camera){
      this.switchCamera();
    } else if(id == R.id.trtc_btn_log_info){
      this.showDebugView();
    }
  }
  muteVideo(){
    var isSelected = mMuteVideo.isSelected()
    if(!isSelected){
      mTRTCCloud.stopLocalPreview();
      mMuteVideo.setBackground(this.getResources().getDrawable(R.mipmap.rtc_camera_off));
      mVideoMutedTipsView.setVisibility(View.VISIBLE);
    } else {
      mTRTCCloud.startLocalPreview(mIsFrontCamera,mLocalPreviewView);
      mMuteVideo.setBackground(this.getResources().getDrawable(R.mipmap.rtc_camera_on));
      mVideoMutedTipsView.setVisibility(View.GONE);
    }
    mMuteVideo.setSelected(!isSelected)
  }
  muteAudio(){
    var isSelected = mMuteAudio.isSelected()
    if(!isSelected){
      mTRTCCloud.stopLocalAudio();
      mMuteAudio.setBackground(this.getResources().getDrawable(R.mipmap.rtc_mic_off));
    } else {
      mTRTCCloud.startLocalAudio();
      mMuteAudio.setBackground(this.getResources().getDrawable(R.mipmap.rtc_mic_on));
    }
    mMuteAudio.setSelected(!isSelected)
  }
  switchCamera(){
    mTRTCCloud.switchCamera()
    var isSelected = mSwitchCamera.isSelected()
    mIsFrontCamera = !isSelected
    mSwitchCamera.setSelected(!isSelected)
  }
  showDebugView(){
    mLogLevel = (mLogLevel + 1) % 3
    mTRTCCloud.showDebugView(mLogLevel)
  }
}
RTCActivity.TAG = "s"
RTCActivity.REQ_PERMISSION_CODE = 0

OnekitPage(new MainActivity());