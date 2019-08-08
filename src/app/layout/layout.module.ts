import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { LayoutNavbarComponent } from './layout-navbar/layout-navbar.component';


@NgModule({
  declarations: [
    LayoutComponent,
    LayoutNavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
})
export class LayoutModule { }
