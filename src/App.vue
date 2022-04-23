<template>
  <h1>
    Базовый Xstate
    <p>Counter App</p>
  </h1>
  <div><button>Increment</button> <button>Decrement</button></div>

  <h2>Count: 0</h2>
  <div>
    <button>Activate/Inactivate</button>
  </div>
  <h3>Current State: Active/Inactive</h3>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
button {
  margin: 5px;
}
</style>
