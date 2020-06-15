<template>
  <div>
    <div id="on" @click="switched(true)" :class="{active: value}">On</div>
    <div id="off" @click="switched(false)" :class="{active: !value}">Off</div>
    <input type="text" v-model="filterText" />
    <ul>
      <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
    </ul>
  </div>
</template>

<script>
import fruitsMixin from "./fruitMixin";

export default {
  props: ["value"],
  mixins: [fruitsMixin],
  methods: {
    switched(isOn) {
      this.$emit("input", isOn);
    }
  }
};
</script>

<style scoped>
#on,
#off {
  width: 40px;
  height: 20px;
  background-color: lightgray;
  padding: 2px;
  display: inline-block;
  margin: 10px -2px;
  box-sizing: content-box;
  cursor: pointer;
  text-align: center;
}

#on:hover,
#on.active {
  background-color: lightgreen;
}

#off:hover,
#off.active {
  background-color: lightcoral;
}
</style>