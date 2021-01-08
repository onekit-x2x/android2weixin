import {OnekitPage} from '../../../android2weixin/index';
import {android,androidx} from '../../../android2weixin/index';
import {com} from '../../../index';
const Intent = android.content.Intent
const Bundle = android.os.Bundle
const TextUtils = android.text.TextUtils
const View = android.view.View
const InputMethodManager = android.view.inputmethod.InputMethodManager
const EditText = android.widget.EditText
const Toast = android.widget.Toast
const AppCompatActivity = androidx.appcompat.app.AppCompatActivity
const Constant = com.tencent.liteav.debug.Constant
const R  = com.tencent.rtc.R
class RTCEntranceActivity extends AppCompatActivity{
    constructor(){
        super()
        this.mInputUserId=null;
        this.mInputRoomId=null;
    }
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

OnekitPage(new RTCEntranceActivity());