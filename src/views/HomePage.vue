<template>
  <div>
    <h1>Home Page</h1>
    <p>안녕하세요. {{ name }}입니다.</p>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HomePage",
  setup() {
    const name = ref("Vue.js");
    return {
      name,
    };
  },
});
</script>
