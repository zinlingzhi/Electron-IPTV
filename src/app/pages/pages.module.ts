import { ProgressBarModule } from 'angular-progress-bar';
import { AngularResizedEventModule } from 'angular-resize-event';
import { NgProgressModule } from 'ngx-progressbar';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import {
    AccountConfirmPageComponent
} from './auth/account-confirm-page/account-confirm-page.component';
import {
    AccountInfoLoadingPageComponent
} from './auth/account-info-loading-page/account-info-loading-page.component';
import {
    ConfirmLogoutPageComponent
} from './auth/confirm-logout-page/confirm-logout-page.component';
import { LoginFailedPageComponent } from './auth/login-failed-page/login-failed-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { FavoriteLandPageComponent } from './favorite-land-page/favorite-land-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import {
    MovieGenreDetailPageComponent
} from './movie-genre-detail-page/movie-genre-detail-page.component';
import { MovieLandPageComponent } from './movie-land-page/movie-land-page.component';
import { RadioLandPageComponent } from './radio-land-page/radio-land-page.component';
import { RecordingLandPageComponent } from './recording-land-page/recording-land-page.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { TvchannelLandPageComponent } from './tvchannel-land-page/tvchannel-land-page.component';
import { TvseriesLandPageComponent } from './tvseries-land-page/tvseries-land-page.component';
import { VodCategoryPageComponent } from './vod-category-page/vod-category-page.component';
import { VODPageComponent } from './vodpage/vodpage.component';
import { CastPageComponent } from './cast-page/cast-page.component';
import { LivetvCategoryPageComponent } from './livetv-category-page/livetv-category-page.component';
import { ComponentsModule } from '../components/components.module';
import { PlayerModule } from '../player/player.module';
@NgModule({
  declarations: [
    LoginPageComponent,
    MainPageComponent,
    SidebarMenuComponent,
    HomePageComponent,
    MovieLandPageComponent,
    TvchannelLandPageComponent,
    TvseriesLandPageComponent,
    RadioLandPageComponent,
    RecordingLandPageComponent,
    FavoriteLandPageComponent,
    MovieGenreDetailPageComponent,
    LoginFailedPageComponent,
    AccountConfirmPageComponent,
    AccountInfoLoadingPageComponent,
    ConfirmLogoutPageComponent,
    VodCategoryPageComponent,
    VODPageComponent,
    CastPageComponent,
    LivetvCategoryPageComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ComponentsModule,
    AngularResizedEventModule,
    ProgressBarModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    NgProgressModule,
    FontAwesomeModule,
    PlayerModule
  ],
  providers: [
  ],
  exports: [
    LoginPageComponent,
    MainPageComponent,
    SidebarMenuComponent,
    HomePageComponent,
    MovieLandPageComponent,
  ],
})
export class PagesModule {
}
