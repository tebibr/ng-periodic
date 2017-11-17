import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CountService } from './services/count.service';
import { MyWebAPIService } from './services/mywebapi.service';
import { ElementsService } from './services/elements.service';
import { SubmitComponent } from './submit/submit.component';
import { ElementsComponent } from './elements/elements.component';
import { ScoresComponent } from './scores/scores.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitComponent,
    ElementsComponent,
    ScoresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
      {path: 'submit', component: SubmitComponent},
      {path: '', component: ElementsComponent},
      {path: 'scores', component: ScoresComponent},
    ]),
  ],
  providers: [CountService, MyWebAPIService, ElementsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }

}
