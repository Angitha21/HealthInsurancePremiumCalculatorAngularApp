export interface PremiumRequest {
  Age: number;
  CoverageAmount: number;
  UsesTobacco: boolean;
  Gender: string;
}
export interface PremiumResponse {
  basePremium: number;
  totalPremium: number;

}