import { NgModule } from '@angular/core';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway';


@NgModule({
	declarations: [PaymentGatewayComponent],
	imports: [],
	exports: [PaymentGatewayComponent],
	providers: [
		//PayPalOriginal
	]
})
export class ComponentsModule {}
