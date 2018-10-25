import { Injectable, ErrorHandler } from '@angular/core';


@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  
  constructor() { }

  handleError(error: any): void {
    console.debug('custom error', error);
    throw error;
  }

 

}
