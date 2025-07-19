import { Component, OnInit, } from '@angular/core';
import { Observable } from 'rxjs';
import { PremiumService } from '../../services/premium.service';
import { PremiumRequest } from 'src/PremiumReq';
import { PremiumResponse } from 'src/PremiumReq';

@Component({
  selector: 'app-premium-calculator',
  templateUrl: './premium-calculator.component.html',
  styleUrls: ['./premium-calculator.component.css']
})
export class PremiumCalculatorComponent implements OnInit {

  premiumRequest: PremiumRequest = {} as PremiumRequest;
  premiumResponse: PremiumResponse = {} as PremiumResponse;

  constructor(private premiumService: PremiumService) { }

  ngOnInit(): void {
  }

  calculate(){
    console.log("Calculating premium...");
  }

  onSubmit()
  {
 console.log("Form submitted");
    this.calculate();
  this.getPremium(this.premiumRequest);
  }

  getPremium(premiumRequest: PremiumRequest)
  {
    this.premiumService.getPremium(premiumRequest).subscribe((premiumResponse: PremiumResponse) => {
      console.log("Premium response received:", premiumResponse);
      this.premiumResponse = premiumResponse;
  });
}

    
    

}
