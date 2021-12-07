<template>
  <div>
    <input type="checkbox" v-model="done" /> {{ done ? "Done" : "Not done" }}
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      done: false,
    };
  },
  methods: {
    toggle() {
      this.done = !this.done;
    },
  },
};
</script>

<style></style>
