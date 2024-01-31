<template>
  <div>
    <h1>Use ID - ssr safe</h1>
    email-id: {{ emailId }}
    pass-id: {{ passwordId}}

    <div>
      Безопасные ид для сср
    </div>
  </div>
</template>

<script setup>
const emailId = useId()
const passwordId = useId()
</script>
