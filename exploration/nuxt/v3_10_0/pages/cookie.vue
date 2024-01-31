<template>
  <div>
    cookie
  </div>
</template>

<script setup>
const tokenCookie = useCookie('token')

if (!tokenCookie.value) {
  tokenCookie.value = 'my-cookie'
}

console.log(tokenCookie.value);
</script>
