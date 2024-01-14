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
});
</script>

<style>
.v2 {
  background: red;
}
</style>
