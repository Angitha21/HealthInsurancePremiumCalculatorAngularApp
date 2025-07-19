import { Component, OnInit, Input } from '@angular/core';
import { PremiumResponse } from 'src/PremiumReq';

@Component({
  selector: 'app-premium-summary',
  templateUrl: './premium-summary.component.html',
  styleUrls: ['./premium-summary.component.css']
})
export class PremiumSummaryComponent implements OnInit {
@Input() premiumResponse: PremiumResponse = {} as PremiumResponse;

  constructor() { }

  ngOnInit(): void {
    console.log("Premium response received summary:", this.premiumResponse);
  }


}
