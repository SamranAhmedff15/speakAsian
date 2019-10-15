import { NgModule } from '@angular/core';
import { MatButtonModule, MatListModule, MatIconModule, MatToolbarModule, MatDividerModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
const MaterialComponents = [
  MatButtonModule, MatSidenavModule, MatListModule, MatIconModule, MatToolbarModule, MatButtonModule, MatDividerModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
