import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './modules/navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './modules/footer/footer.component';
import { DestinationsComponent } from './destinations/destinations/destinations.component';
import { TripTypesComponent } from './trip-types/trip-types/trip-types.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LeadersComponent } from './leaders/leaders/leaders.component';
import { HotelsComponent } from './hotels/hotels/hotels.component';
import { ToursComponent } from './tours/tours/tours.component';
import { HotelsDetailComponent } from './hotels/hotels-detail/hotels-detail.component';
import { ToursDetailComponent } from './tours/tours-detail/tours-detail.component';
import { LeaderDetailComponent } from './leaders/leaders-detail/leader-detail.component';
import { DestinationDetailComponent } from './destinations/destination-detail/destination-detail.component';
import { TripTypeDetailComponent } from './trip-types/trip-type-detail/trip-type-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomePageComponent,
    FooterComponent,
    DestinationsComponent,
    TripTypesComponent,
    AboutUsComponent,
    LeadersComponent,
    HotelsComponent,
    ToursComponent,
    HotelsDetailComponent,
    ToursDetailComponent,
    LeaderDetailComponent,
    DestinationDetailComponent,
    TripTypeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
