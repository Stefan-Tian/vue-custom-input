import Vue from 'vue';
import App from './App.vue';

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    var delay = 0;
    if (binding.modifiers['delay']) {
      delay = 3000;
    }

    setTimeout(() => {
      if (binding.arg === 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
    // el.style.backgroundColor = binding.value;
  },
});

Vue.filter('toLowercase', function (value) {
  return value.toLowerCase();
});

new Vue({
  el: '#app',
  render: (h) => h(App),
});
