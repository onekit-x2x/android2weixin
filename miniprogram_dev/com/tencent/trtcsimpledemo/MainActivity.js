import {OnekitPage} from '../../../android2weixin';
import R from './R';
import {android,androidx,com} from '../../../android2weixin';
const Intent = android.content.Intent;
const Bundle = android.os.Bundle;
const Handler = android.os.Handler;
const View = android.view.View;
const AppCompatActivity = androidx.appcompat.app.AppCompatActivity;
const CustomEntranceActivity = com.tencent.custom.CustomEntranceActivity;
const ScreenEntranceActivity = com.tencent.liteav.screen.ScreenEntranceActivity;
const LiveRoomListActivity = com.tencent.live.LiveRoomListActivity;
const RTCEntranceActivity = com.tencent.rtc.RTCEntranceActivity;

class MainActivity extends AppCompatActivity{
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
        console.log("bt_rtc",view)
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