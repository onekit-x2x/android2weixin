import {OnekitPage} from 'android2weixin';
import Intent from "android2weixin/android/content/Intent"
import Bundle from "android2weixin/android/os/Bundle"
import TextUtils from "android2weixin/android/text/TextUtils"
import View from "android2weixin/android/view/View"
import InputMethodManager from "android2weixin/android/view/inputmethod/InputMethodManager"
import EditText from "android2weixin/android/widget/EditText"
import Toast from "android2weixin/android/widget/Toast"
import AppCompatActivity from "android2weixin/androidx/appcompat/app/AppCompatActivity"
import Constant from "android2weixin/com/tencent/liteav/debug/Constant"
import R from "android2weixin/com/tencent/rtc/R"
class RTCEntranceActivity extends AppCompatActivity{
mInputUserId;
mInputRoomId;
    onCreate(savedInstanceState ){
        super.onCreate(savedInstanceState)
        this.setContentView(R.layout.activity_rtc_entrance)
        this.getSupportActionBar().hide()
        mInputUserId = this.findViewById(R.id.et_input_username)
        mInputRoomId = this.findViewById(R.id.et_input_room_id)
        this.findViewById(R.id.bt_enter_room).setOnClickListener({
    onClick(view ){
        this.startEnterRoom()
    }
})
        this.findViewById(R.id.rtc_entrance_main).setOnClickListener({
    onClick(v ){
        this.hideInput()
    }
})
        this.findViewById(R.id.entrance_ic_back).setOnClickListener({
    onClick(v ){
        this.finish()
    }
})
        mInputRoomId.setText("s")
        var time = String.valueOf(System.currentTimeMillis())
        var userId = time.substring(time.length() - 8)
        mInputUserId.setText(userId)
    }
    startEnterRoom(){
        if(TextUtils.isEmpty(mInputUserId.getText().toString().trim()) || TextUtils.isEmpty(mInputRoomId.getText().toString().trim())){
            Toast.makeText(this,this.getString(R.string.rtc_room_input_error_tip),Toast.LENGTH_LONG).show();
            return;
        }
        var intent = new Intent(this,RTCActivity.class)
        intent.putExtra(Constant.ROOM_ID,mInputRoomId.getText().toString().trim())
        intent.putExtra(Constant.USER_ID,mInputUserId.getText().toString().trim())
        this.startActivity(intent)
    }
    hideInput(){
        var imm = this.getSystemService(INPUT_METHOD_SERVICE)
        var v = this.getWindow().peekDecorView()
        if(null != v){
            imm.hideSoftInputFromWindow(v.getWindowToken(),0);
        }
    }
}

OnekitPage(new MainActivity());