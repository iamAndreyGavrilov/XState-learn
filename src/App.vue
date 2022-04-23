<template>
  <h1>
    Базовый Xstate
    <p>Counter App</p>
  </h1>
  <div>
    <button @click="send('INCREMENT')" :disabled="state.matches('inactive')">
      Increment
    </button>
    <button @click="send('DECREMENT')" :disabled="state.matches('inactive')">
      Decrement
    </button>
  </div>

  <h2>Count: {{ state.context.count.toFixed(2) }}</h2>
  <div>
    <button @click="send('TOGGLE')">{{ toggleButtonLabel }}</button>
    <button @click="send('RESET')" :disabled="state.matches('inactive')">
      Reset
    </button>
  </div>
  <h3>Current State: {{ state.value }}</h3>

  <div>
    <h3>Increment step: {{ incVal }}</h3>
    <input
      v-model.number="incVal"
      :disabled="state.matches('inactive')"
      type="number"
    />
  </div>
</template>

<script>
import { computed, ref, watchEffect } from "@vue/runtime-core";
import { useMachine } from "@xstate/vue";
import counterMachine from "./counterMachine";

export default {
  name: "App",
  components: {},
  setup() {
    const incVal = ref(1);
    const { state, send } = useMachine(counterMachine);

    const toggleButtonLabel = computed(() => {
      const current = state.value;
      if (current.matches("active")) {
        return "Inactivate";
      } else if (current.matches("inactive")) {
        return "Activate";
      }
    });

    watchEffect(() => {
      send({
        type: "UPDATE_INC_VAL",
        incVal: incVal.value || 0,
      });
    });

    return {
      state,
      send,
      toggleButtonLabel,
      incVal,
    };
  },
};
</script>

<style>
button {
  margin: 5px;
}
</style>
