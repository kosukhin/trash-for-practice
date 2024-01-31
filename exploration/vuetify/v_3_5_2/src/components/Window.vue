<template>
  <div>
    <v-window
        v-model="window"
        show-arrows
    >
      <v-window-item
          v-for="n in length"
          :key="n"
      >
        <v-card height="200px" class="d-flex justify-center align-center">
          <span class="text-h2">Card {{ n }}</span>
        </v-card>
      </v-window-item>
    </v-window>
  </div>
</template>

<script>
export default {
  name: 'Window',
  data() {
    return {
      window: 0,
      length: 3
    }
  }
};
</script>

<style scoped>

</style>
