<template>
  <div>
    <h1>Filters & Mixins</h1>
    <p>{{text | toUppercase | toLowercase}}</p>
    <input type="text" v-model="filterText" />
    <ul>
      <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
    </ul>
  </div>
</template>

<script>
import fruitsMixin from "./fruitMixin";

export default {
  mixins: [fruitsMixin],
  data() {
    return { text: "Hello there!" };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  }
};
</script>