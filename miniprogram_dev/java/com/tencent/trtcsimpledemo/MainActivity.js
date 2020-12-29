import {OnekitPage} from '../../../../android2weixin/index'
import AppCompatActivity from '../../../../android2weixin/java/androidx/appcompat/app/AppCompatActivity'
import R from './R.js'

class MainActivity {
     onCreate( savedInstanceState) {
    /*
    new Handler().postDelayed(new Runnable() {
      @Override
      public void run() {
          findViewById(R.id.launch_view).setVisibility(View.GONE);
      }
  }, 1000);*/
  this.findViewById(R.id.bt_rtc).setOnClickListener({
   onClick:( view) =>{
          var intent = new Intent(MainActivity.this, RTCEntranceActivity.class);
          startActivity(intent);
      }
  });
  this. findViewById(R.id.bt_live).setOnClickListener( {
   onClick:( view)=> {
          var intent = new Intent(MainActivity.this, LiveRoomListActivity.class);
          startActivity(intent);
      }
  });
  this. findViewById(R.id.bt_screen).setOnClickListener({
   onClick:( view)=> {
          var intent = new Intent(MainActivity.this, ScreenEntranceActivity.class);
          startActivity(intent);
      }
  });
  this.findViewById(R.id.bt_custom_capture).setOnClickListener( {
 onClick:( view) =>{
          var intent = new Intent(MainActivity.this, CustomEntranceActivity.class);
          startActivity(intent);
      }
  });
  }
}
OnekitPage(new MainActivity());