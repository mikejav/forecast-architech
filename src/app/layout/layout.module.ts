import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { LayoutNavbarComponent } from './layout-navbar/layout-navbar.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';


@NgModule({
  declarations: [
    LayoutComponent,
    LayoutNavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoadingBarModule,
    LoadingBarRouterModule,
  ],
})
export class LayoutModule { }
