<template>
  <div>
    <h1>Filters & Mixins</h1>
    <p>{{text | toUppercase | toLowercase}}</p>
  </div>
</template>

<script>
export default {
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