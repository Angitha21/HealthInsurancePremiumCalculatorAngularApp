import { Component, OnInit, } from '@angular/core';
import { Observable } from 'rxjs';
import { PremiumService } from '../../services/premium.service';
import { PremiumRequest } from 'src/PremiumReq';
import { PremiumResponse } from 'src/PremiumReq';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-premium-calculator',
  templateUrl: './premium-calculator.component.html',
  styleUrls: ['./premium-calculator.component.css']
})
export class PremiumCalculatorComponent implements OnInit {

  premiumRequest: PremiumRequest = {} as PremiumRequest;
  premiumResponse: PremiumResponse = {} as PremiumResponse;
  username: string = '';
  password: string = '';

  constructor(private premiumService: PremiumService,private authservice: AuthService) { }

  ngOnInit(): void {
  }

  calculate(){
    console.log("Calculating premium...");
  }

  onSubmit(form: any)
  {
    if (!form.valid) {
      alert('Please fill in all required fields.');
      return;
    }
    if (!this.authservice.isLoggedIn()) {
      this.loginAndGetPremium(this.username, this.password);
      return;
    }
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

  loginAndGetPremium(username: string, password: string) {
    this.authservice.login(username, password).subscribe({
      next: () => this.getPremium(this.premiumRequest),
      error: () => console.log('Invalid credentials')
    });
  }

    
    

}
