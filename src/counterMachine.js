import { assign, createMachine } from "xstate";

const incCount = assign({
  count: (ctx) => ctx.count + 1,
});

const decCount = assign({
  count: (ctx) => ctx.count - 1,
});

const counterMachine = createMachine(
  {
    id: "counter",
    initial: "active",
    context: {
      count: 0,
    },

    states: {
      active: {
        on: {
          TOGGLE: {
            target: "inactive",
          },
          INCREMENT: {
            actions: ["incCount"],
          },
          DECREMENT: {
            actions: ["decCount"],
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
