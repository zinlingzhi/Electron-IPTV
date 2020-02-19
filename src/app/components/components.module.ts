import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ResizeDiv } from './resize-div/resize-div';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { MultiMovieSliderComponent } from './multi-movie-slider/multi-movie-slider.component';
import { MultiTvChannelSliderComponent } from './multi-tv-channel-slider/multi-tv-channel-slider.component';
import { MultiSeriesSliderComponent } from './multi-series-slider/multi-series-slider.component';
import { MultiRadioSliderComponent } from './multi-radio-slider/multi-radio-slider.component';
import { AccountPartComponent } from './account-part/account-part.component';

import { AngularResizedEventModule } from 'angular-resize-event';
import { LargeCardSliderComponent } from './large-card-slider/large-card-slider.component';
import { SmallCardSliderComponent } from './small-card-slider/small-card-slider.component';

@NgModule({
    declarations: [
        ResizeDiv,
        SidebarMenuComponent,
        MultiMovieSliderComponent,
        MultiTvChannelSliderComponent,
        MultiSeriesSliderComponent,
        MultiRadioSliderComponent,
        AccountPartComponent,
        LargeCardSliderComponent,
        SmallCardSliderComponent,
        
    ],
    imports: [
        BrowserModule, 
        FormsModule,
        AngularResizedEventModule
    ],
    exports: [
        ResizeDiv,
        SidebarMenuComponent,
        MultiMovieSliderComponent,
        MultiTvChannelSliderComponent,
        MultiSeriesSliderComponent,
        MultiRadioSliderComponent,
        AccountPartComponent,
        LargeCardSliderComponent,
        SmallCardSliderComponent,
    ],
})
export class ComponentsModule { }
