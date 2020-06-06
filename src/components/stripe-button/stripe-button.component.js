import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51Gr75kFB3PZFkywXJGwrCShh1N6rNvGbtQOaZ4UY6pVSxRDpAGpIRLuhH32rhwea5djNPScA0UxFV1ZXhKjKeSbN004GLv2jm4"
    
    const onToken = token =>{
        console.log(token);
        alert("Payment Successful")
    }

    return(
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )


}

export default StripeCheckoutButton;