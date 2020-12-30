/* eslint-disable camelcase */
import ActionBar from './ActionBar'
import FragmentActivity from '../../fragment/app/FragmentActivity'

export default class AppCompatActivity extends FragmentActivity {
  // eslint-disable-next-line class-methods-use-this
  getSupportActionBar() {
    return new ActionBar()
  }
}
