import { Component } from '@angular/core';

import { ConsulePage } from '../consule/consule';
import { ContactPage } from '../contact/contact';
import { AmbassadePage } from '../ambassade/ambassade';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AmbassadePage;
  tab2Root = ConsulePage;
  tab3Root = ContactPage;

  constructor() {

  }
}
