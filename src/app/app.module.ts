import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CountService } from './services/count.service';
import { MyWebAPIService } from './services/mywebapi.service';
import { PlayComponent } from './play/play.component';
import { ElementsComponent } from './elements/elements.component';
import { ScoresComponent } from './scores/scores.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    ElementsComponent,
    ScoresComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
      {path: 'play', component: PlayComponent},
      {path: '', component: ElementsComponent},
      {path: 'scores', component: ScoresComponent},
    ]),
  ],
  providers: [CountService, MyWebAPIService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }

}
