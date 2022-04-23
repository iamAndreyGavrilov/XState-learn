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

  <h2>Count: {{ state.context.count }}</h2>
  <div>
    <button @click="send('TOGGLE')">{{ toggleButtonLabel }}</button>
  </div>
  <h3>Current State: Active/Inactive</h3>
</template>

<script>
import { useMachine } from "@xstate/vue";
import counterMachine from "./counterMachine";
import { computed } from "@vue/runtime-core";

export default {
  name: "App",
  components: {},
  setup() {
    const { state, send } = useMachine(counterMachine);

    const toggleButtonLabel = computed(() => {
      const current = state.value;
      if (current.matches("active")) {
        return "Inactivate";
      } else if (current.matches("inactive")) {
        return "Activate";
      }
    });

    return {
      state,
      send,
      toggleButtonLabel,
    };
  },
};
</script>

<style>
button {
  margin: 5px;
}
</style>
