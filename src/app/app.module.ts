import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './features/componets/menu/menu.component';
import { FooterComponent } from './features/componets/footer/footer.component';
import { BannerComponent } from './features/componets/banner/banner.component';
import { CounterComponent } from './features/componets/counter/counter.component';
import { GeneralComponent } from './features/componets/general/general.component';
import { SponsorComponent } from './features/componets/sponsor/sponsor.component';
import { SpeakersComponent } from './features/componets/speakers/speakers.component';
import { InfoComponent } from './features/componets/info/info.component';
import { ScheduleComponent } from './features/componets/schedule/schedule.component';
import { PastEventComponent } from './features/componets/past-event/past-event.component';
import { EventdayComponent } from './features/componets/eventday/eventday.component';
import { CardSpeakerComponent } from './features/componets/card-speaker/card-speaker.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    BannerComponent,
    CounterComponent,
    GeneralComponent,
    SponsorComponent,
    SpeakersComponent,
    InfoComponent,
    ScheduleComponent,
    PastEventComponent,
    EventdayComponent,
    CardSpeakerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
