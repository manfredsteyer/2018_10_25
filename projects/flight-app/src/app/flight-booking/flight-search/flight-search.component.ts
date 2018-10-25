import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {FlightService} from '@flight-workspace/flight-api';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightSearchComponent implements OnInit {

  from: string = 'Hamburg'; // in Germany
  to: string = 'Graz'; // in Austria
  urgent: boolean = false;

  get flights() {
    return this.flightService.flights;
  }

  
  
  get flights$() {
    return this.flightService.flights$;
  }

  // "shopping basket" with selected flights
  basket: object = {
    "3": true,
    "5": true
  };

  constructor(
    private flightService: FlightService) {
  }

  ngOnInit() {
  }

  search(): void {


    if (!this.from || !this.to) return;

    if (this.from === this.to) throw new Error('so geht des oba ned!');

    this.flightService
      .load(this.from, this.to, this.urgent);
  }

  delay(): void {
    this.flightService.delay();
  }

}
