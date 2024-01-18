<template>
  <div class="v2">Hello world v2</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './test.css';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  mounted() {
    console.log('root', this.$el.parentNode, this.$el.parentNode?.parentNode);
  },
});
</script>

<style>
body {
  background-color: aliceblue;
}
</style>
