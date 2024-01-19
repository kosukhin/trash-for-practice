<template>
  <div class="v2">Hello world v2</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
.v2 {
  background-color: red;
  font-size: 30px;
  padding: 40px;
}
</style>
