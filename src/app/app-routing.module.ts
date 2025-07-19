import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PremiumCalculatorComponent } from './components/premium-calculator/premium-calculator.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'calculator',
    component: PremiumCalculatorComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
