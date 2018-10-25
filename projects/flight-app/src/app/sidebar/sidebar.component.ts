import { FlightService } from '@flight-workspace/flight-api';
import {Component} from '@angular/core';


@Component({
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
  constructor(private flightService: FlightService) {
  }

  loadHistory() {
    this.flightService.load('Hamburg', 'Graz', false);
  }

}
