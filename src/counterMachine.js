import { assign, createMachine } from "xstate";

const incCount = assign({
  count: (ctx) => ctx.count + 1,
});

const decCount = assign({
  count: (ctx) => ctx.count - 1,
});

const counterMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QGMD2BXAdgFzAJwDoBDZbASwDcwBiAFQHkBxRgGQFFFQAHVWM81Jk4gAHogC0AJgCMAZgIB2AKwAGWQE4V62dLUAOWQBoQAT0QA2aQUl6VBvUtmSFClTIC+742iy5CJcipqAEkAOQBhACU2AFk2UNphHj4BISRRRAAWFQJZZQUNFXMC7SUFYzMEcR1zAjd1c3VpZSUlcxUFT28MHHxiUkoaABE2KNj4xPTk-jJBYTEEWT0CaXVJJTXMzNUtNYqJSVlMgky18zy9NaW8rpAfXsIyTADBuiZWDineGbn0hfEtisVNJ1sC9OZTpkFJJMvsECDcgppJlzI08rJ2gVzJ4vCBMKgIHBhPc-P1AmAkt9UvMJDolIpJMVpAZZFooeY4eIQVZJMCjki9HpGU0lLcSX0ni8qJSUrM0qAFuZ6a1zucVCpMvy9qYJNzrHynK5BUqQWKen4ZT95RkqrINAymSy2QoOTrbZc6siiusGspMtIce4gA */
  createMachine(
    {
      context: { count: 0 },
      id: "counter",
      initial: "active",
      states: {
        active: {
          on: {
            TOGGLE: {
              target: "inactive",
            },
            INCREMENT: {
              actions: "incCount",
            },
            DECREMENT: {
              actions: "decCount",
            },
          },
        },
        inactive: {
          on: {
            TOGGLE: {
              target: "active",
            },
          },
        },
      },
    },
    {
      actions: {
        incCount,
        decCount,
      },
    }
  );

export default counterMachine;
