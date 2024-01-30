<template>
  <div>
    data here
    <div>
      <div>
        {{ data.id }}
      </div>
      <div>
        {{ data.title }}
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
console.log(route.params.slug);
// https://github.com/nuxt/nuxt/releases/tag/v3.10.0
const { data } = await useAsyncData(route.params.slug, async () => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/${route.params.slug ?? 2}`)

  return await resp.json()
})

console.log('data', data.value);
</script>
