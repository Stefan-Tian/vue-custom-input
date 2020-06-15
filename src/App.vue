<template>
  <div class="container">
    <app-switch v-model="dataSwitch" :value="dataSwitch"></app-switch>
    <p v-highlight:background="'blue'">Color this</p>
    <p v-highlight:color.delay="'blue'">Color this</p>
    <p
      v-local-highlight:color.delay.blink="{mainColor: 'red', secondColor: 'blue', delay: 3000}"
    >Color this</p>
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
  components: { "app-switch": Switch },
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers["delay"]) {
          delay = binding.value.delay;
        }

        if (binding.modifiers["blink"]) {
          const { mainColor, secondColor } = binding.value;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              if (currentColor === mainColor) {
                currentColor = secondColor;
              } else {
                currentColor = mainColor;
              }
              if (binding.arg === "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, 1000);
          }, delay);
        } else {
          // el.style.backgroundColor = binding.value;
          setTimeout(() => {
            if (binding.arg === "background") {
              el.style.backgroundColor = binding.arg;
            } else {
              el.style.color = binding.arg;
            }
          }, delay);
        }
      }
    }
  }
};
</script>

<style>
</style>
