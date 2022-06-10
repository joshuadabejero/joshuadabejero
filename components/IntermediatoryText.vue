<template>
  <div class="ma-10 text-center">
    <h1 class="display-1">{{ payload.title }}</h1>
    <p class="subtitle-1">{{ payload.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'IntermediatoryText',
  props: {
    payload: {
      type: Object,
      default: null,
      required: false,
    },
  },
}
</script>
