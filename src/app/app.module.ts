import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { routing } from './app.routing';
import { AppComponent } from './app.component';

const httpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json');

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    FlexLayoutModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'cs' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
