import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { CrewComponent } from './crew/crew.component';
import { TechnologyComponent } from './technology/technology.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

export function dataFactory(provider: DataService) {
  return () => provider.getData();
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService,
    {
      provide: APP_INITIALIZER,
      useFactory: dataFactory,
      deps: [DataService],
      multi: true
    }],
  bootstrap: [AppComponent]
})

export class AppModule { }
