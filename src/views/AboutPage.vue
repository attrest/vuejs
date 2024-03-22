<template>
  <div>
    <h1>About Page</h1>
    <p>안녕하세요. {{ props.name }}입니다.</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  name: {
    type: String,
    default: "Vue3",
  },
});
</script>
