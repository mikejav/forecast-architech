import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LayoutComponent } from './layout.component';
import { LayoutNavbarComponent } from './layout-navbar/layout-navbar.component';


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
