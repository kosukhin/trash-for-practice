<template>
  <div>
    <h3>Пример применения комопнента с стилем внутри Vue2</h3>
    <div class="v2">in vue3</div>
    <p>&nbsp;</p>
    <legacy-the-profile />
  </div>
</template>

<script>
import { ref } from 'vue';
import Button from 'vue2App/HelloWorld?shadow';
import { vue2ToVue3 } from './utils';
import test from 'vue2App/test.css';

export default {
  setup() {
    vue2ToVue3(Button, 'legacy-the-profile', test);
    const count = ref(0);
    const inc = () => {
      count.value += 1;
    };

    return {
      count,
      inc,
    };
  },
};
</script>

<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
