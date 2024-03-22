<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

// 상태와 뮤테이션에 접근하는 계산된 속성
const count = computed(() => store.state.count);
const increment = () => {
  store.commit("increment");
};
const decrement = () => {
  store.commit("decrement");
};
</script>

<!-- <script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    ...mapMutations(["increment", "decrement"]),
  },
};
</script> -->
