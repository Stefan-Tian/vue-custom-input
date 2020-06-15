const fruitMixin = {
  data() {
    return { fruits: ['Apple', 'Banna', 'Mango', 'Melon'], filterText: '' };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText);
      });
    },
  },
  created() {
    console.log('Created');
  },
};

export default fruitMixin;
