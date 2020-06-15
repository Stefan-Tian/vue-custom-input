<template>
  <div class="container">
    <app-switch v-model="dataSwitch" :value="dataSwitch"></app-switch>
    <p v-highlight:background="'blue'">Color this</p>
    <p v-highlight:color.delay="'blue'">Color this</p>
  </div>
</template>

<script>
import Switch from "./Switch.vue";
export default {
  data() {
    return {
      dataSwitch: true
    };
  },
  components: { "app-switch": Switch }
};
</script>

<style>
</style>
