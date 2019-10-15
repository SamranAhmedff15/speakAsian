import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showMenu: boolean;
  constructor(public translate: TranslateService, public router: Router) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('fr');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'fr');

    router.events.forEach((event) => {
      let currentRoute;
      if (event instanceof NavigationStart) {
        if (event.url === '/Signin') {
          currentRoute = true;
        } else if (event.url === '/Signup') {
          currentRoute = true;
        } else {
          currentRoute = false;
        }
        this.showMenu = currentRoute;
      }
    });
  }
}
