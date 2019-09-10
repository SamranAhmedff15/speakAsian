import { Component, OnInit } from '@angular/core';
import { faCertificate, faSchool, faChalkboardTeacher, faRocket} from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { NavbarComponent} from '../navbar/navbar.component';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  faSchool = faSchool;
  faCertificate = faCertificate;
  faChalkboardTeacher = faChalkboardTeacher;
  faRocket = faRocket;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('fr');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'fr');
   }

  ngOnInit() {
  }

}
