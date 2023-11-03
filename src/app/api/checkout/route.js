import { NextResponse } from "next/server";
import Stripe from "stripe";
import { v4 as uuidv4 } from "uuid";
// import jwt from "jsonwebtoken";
import calculateCartTotal from "../../../utils/calculateCartTotal";
import firebaseInstance from "@/lib/firebase";

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const body = await req.json();
  const { amount, products, userId, address } = body;

  try {
    const { cartTotal, stripeTotal } = calculateCartTotal(products);
    //     console.log(cartTotal, stripeTotal);
    //     const prevCustomer = await stripe.customers.list({
    //       email: paymentData.email,
    //       limit: 1,
    //     });
    //     console.log(prevCustomer, paymentData.id);
    //     const isExistingCustomer = prevCustomer.data.length > 0;
    //     let newCustomer;
    //     if (!isExistingCustomer) {
    //       newCustomer = await stripe.customers.create({
    //         email: paymentData.email,
    //         source: paymentData.id,
    //       });
    //     }
    //     console.log(newCustomer);
    //     const customer =
    //       (isExistingCustomer && prevCustomer.data[0].id) || newCustomer.id;
    //     console.log("4");
    //     await stripe.charges.create(
    //       {
    //         currency: "usd",
    //         amount: stripeTotal,
    //         //   source: paymentData.id,
    //         receipt_email: paymentData.email,
    //         customer,
    //         description: `Checkout | ${paymentData.email} | ${paymentData.id}`,
    //       },
    //       {
    //         idempotencyKey: uuidv4(),
    //       }
    //     );

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: { enabled: true },
    });

    //     await new firebaseInstance.addOrder({
    //       user: userId,
    //       address,
    //       total: cartTotal,
    //       products: products,
    //     });
    console.log("6");
    return NextResponse.json(
      { clientSecret: paymentIntent.client_secret },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  }
}
