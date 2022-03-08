import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = "https://checkout.stripe.com/pay/cs_test_a17y5NLSitDQWLkNyDfDolw5WMseL2IyG09EpTtZvgdQP3LuykKscvTg1c#fidkdWxOYHwnPyd1blpxYHZxWjA0Tl9CdX1BYGpOfV1RNUNTc1VUUX9DQTFfQWRJYzFzbWxNPU0yT09vSDMyQDBLaW09SDFJVTZEbXQ0ZzdzX2RxQkYxUUJUV319cnE8VmZ2dmFOcFRDMmJ1NTU9fVQ9d09UZCcpJ3VpbGtuQH11anZgYUxhJz8ncWB2cVoxYnI2Zk1maGsxX3dhaEBjXFwneCUl";
  }

}
