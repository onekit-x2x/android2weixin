import {OnekitPage,android,androidx} from '../../../android2weixin/index';
const Intent = android.content.Intent;
const Bundle = android.os.Bundle;
const Handler = android.os.Handler;
const View = android.view.View;
const AppCompatActivity = androidx.appcompat.app.AppCompatActivity;
const CustomEntranceActivity = {class:"com.tencent.custom.CustomEntranceActivity"};
const ScreenEntranceActivity = {class:"com.tencent.liteav.screen.ScreenEntranceActivity"};
const LiveRoomListActivity = {class:"com.tencent.live.LiveRoomListActivity"};
const RTCEntranceActivity = {class:"com.tencent.rtc.RTCEntranceActivity"};
const R = "./R";

export default class MainActivity extends AppCompatActivity{
    onCreate(savedInstanceState ){
        super.onCreate(savedInstanceState)
        this.setContentView(R.layout.activity_main)
        this.getSupportActionBar().hide()
        new Handler().postDelayed({
    run:()=>{
        this.findViewById(R.id.launch_view).setVisibility(View.GONE)
    }
},1000)
        this.findViewById(R.id.bt_rtc).setOnClickListener({
    onClick:(view )=>{
        var intent = new Intent(this,RTCEntranceActivity.class)
        this.startActivity(intent)
    }
})
        this.findViewById(R.id.bt_live).setOnClickListener({
    onClick:(view )=>{
        var intent = new Intent(this,LiveRoomListActivity.class)
        this.startActivity(intent)
    }
})
        this.findViewById(R.id.bt_screen).setOnClickListener({
    onClick:(view )=>{
        var intent = new Intent(this,ScreenEntranceActivity.class)
        this.startActivity(intent)
    }
})
        this.findViewById(R.id.bt_custom_capture).setOnClickListener({
    onClick:(view )=>{
        var intent = new Intent(this,CustomEntranceActivity.class)
        this.startActivity(intent)
    }
})
    }
}
OnekitPage(new MainActivity());