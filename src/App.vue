<template>
  <div class="container">
    <app-switch v-model="dataSwitch" :value="dataSwitch"></app-switch>
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
