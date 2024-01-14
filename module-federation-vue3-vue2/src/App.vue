<template>
  <div>
    <h3>Vue3 App</h3>
    <div class="v2">in vue3</div>
    <p>&nbsp;</p>
    <div id="vue2Button"></div>
    <vue2-button @btnClick="inc"/>
  </div>
</template>

<script>
import { ref } from 'vue';
import Button from 'vue2App/HelloWorld';
import { vue2ToVue3 } from './utils';
import test from 'vue2App/test.css';

export default {
  components: {
    vue2Button: vue2ToVue3(Button, 'vue2Button'),
  },
  setup() {
    const count = ref(0);
    const inc = () => {
      count.value += 1;
    };

    console.log('test', test);

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
