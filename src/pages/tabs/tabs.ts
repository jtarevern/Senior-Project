import { Component } from '@angular/core';

import { HomePage } from '../home/home';
//import { ProfilePage } from '../profile/profile';
import { UserProfilePage } from '../user-profile/user-profile';
import { EventCreatePage } from '../event-create/event-create';
import { ExplorePage } from '../explore/explore';



@Component({

  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = UserProfilePage;
  tab2Root: any = EventCreatePage;
  tab3Root: any = HomePage;
  tab3Root: any = ExplorePage;


  constructor() {

  }
}
