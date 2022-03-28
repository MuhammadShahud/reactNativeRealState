const { Payment } = require("../models/");

const createPayment = (body) => {
  const payment = Payment.create(body);
  return payment;
};

const getPaymentById = (id) => {
  const payment = Payment.findById(id);
  return payment;
};

const checkoutSession = async (body) => {
  const stripe = require("stripe")(
    "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"
  );

  console.log("in service");
  const YOUR_DOMAIN = body.domain;
  // const YOUR_DOMAIN = "my domain";

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: body.currency,
          // currency: "currency",
          product_data: {
            name: "BRAND TO LIFE DIGITALLY",
            images: ["https://www.codedpixelz.com/assets/app-design.png"],
          },
          unit_amount: body.amount,
          // unit_amount: "unit amount",
        },
        quantity: body.quantity,
        // quantity: "quanitity",
      },
    ],
    mode: body.paymentMode,
    // mode: "paymentmode",

    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });
  console.log(session);
  return { id: session.id };
};

const codedCheckoutSession = async (body) => {
  const stripe = require("stripe")(
    // old credentials "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"
    "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"
  );

  const YOUR_DOMAIN = body.domain;
  // const YOUR_DOMAIN = "my domain";

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: body.currency,
          // currency: "currency",
          product_data: {
            name: "BRAND TO LIFE DIGITALLY",
            images: ["https://www.codedpixelz.com/assets/app-design.png"],
          },
          unit_amount: body.amount,
          // unit_amount: "unit amount",
        },
        quantity: body.quantity,
        // quantity: "quanitity",
      },
    ],
    mode: body.paymentMode,
    // mode: "paymentmode",

    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });
  console.log(session);
  return { id: session.id };
};

module.exports = {
  createPayment,
  getPaymentById,
  checkoutSession,
  codedCheckoutSession
};
