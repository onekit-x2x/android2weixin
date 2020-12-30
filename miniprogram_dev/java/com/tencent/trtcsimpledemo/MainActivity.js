import {OnekitPage} from '../../../../android2weixin/index';
import R from './R';
import Intent from "../../../../android2weixin/java/android/content/Intent"
import Bundle from "../../../../android2weixin/java/android/os/Bundle"
import Handler from "../../../../android2weixin/java/android/os/Handler"
import View from "../../../../android2weixin/java/android/view/View"
import AppCompatActivity from "../../../../android2weixin/java/androidx/appcompat/app/AppCompatActivity"
import CustomEntranceActivity from "../../../../java/com/tencent/custom/CustomEntranceActivity"
import ScreenEntranceActivity from "../../../com/tencent/liteav/screen/ScreenEntranceActivity"
import LiveRoomListActivity from "../../../com/tencent/live/LiveRoomListActivity"
import RTCEntranceActivity from "../../../com/tencent/rtc/RTCEntranceActivity"
class MainActivity extends AppCompatActivity{
    onCreate(savedInstanceState ){
        super.onCreate(savedInstanceState)
        this.setContentView(R.layout.activity_main)
        this.getSupportActionBar().hide()
        new Handler().postDelayed({
    run(){
        this.findViewById(R.id.launch_view).setVisibility(View.GONE)
    }
},1000)
        this.findViewById(R.id.bt_rtc).setOnClickListener({
    onClick(view ){
        var intent = new Intent(this,RTCEntranceActivity.class)
        this.startActivity(intent)
    }
})
        this.findViewById(R.id.bt_live).setOnClickListener({
    onClick(view ){
        var intent = new Intent(this,LiveRoomListActivity.class)
        this.startActivity(intent)
    }
})
        this.findViewById(R.id.bt_screen).setOnClickListener({
    onClick(view ){
        var intent = new Intent(this,ScreenEntranceActivity.class)
        this.startActivity(intent)
    }
})
        this.findViewById(R.id.bt_custom_capture).setOnClickListener({
    onClick(view ){
        var intent = new Intent(this,CustomEntranceActivity.class)
        this.startActivity(intent)
    }
})
    }
}
OnekitPage(new MainActivity());