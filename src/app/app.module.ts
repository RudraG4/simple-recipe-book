import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AppDirectives } from './shared/directives/app-directives.module';
import {
  NgxUiLoaderModule,
  NgxUiLoaderHttpModule,
  NgxUiLoaderConfig,
  SPINNER,
} from 'ngx-ui-loader';
import { GoogleTagManagerService } from './shared/services/google-tag-manager.service';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsSize: 40,
  fgsType: SPINNER.threeBounce,
  pbThickness: 5,
  fgsColor: '#C7D1EF',
  pbColor: '#C7D1EF',
};

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RecipesModule,
    ShoppingListModule,
    AppDirectives,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private gtmService: GoogleTagManagerService){
    this.gtmService.loadGTM('GTM-MTCHF4MM');
  }
}
