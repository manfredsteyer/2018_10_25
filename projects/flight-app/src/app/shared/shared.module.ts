import {CommonModule} from '@angular/common';
import {NgModule, ErrorHandler} from '@angular/core';
import {ModuleWithProviders} from '@angular/core/src/metadata/ng_module';
import {CityPipe} from './pipes/city.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ClickWithWarningDirective } from './click-with-warning.directive';
import { CustomErrorHandler } from './error-handler.service';

@NgModule({
   imports: [
      CommonModule
   ],
   declarations: [
      CityPipe,
      ClickWithWarningDirective
   ],
   exports: [
      CityPipe,
      ClickWithWarningDirective
   ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      },
      {
        provide: ErrorHandler,
        useClass: CustomErrorHandler
      }
    ]
    }
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }

}
