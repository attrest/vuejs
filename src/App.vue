<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/counter">Counter</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "@/styles/variables.scss";

/* 컴포넌트 지역 스타일 작성 */
body {
  color: $primary-color;
}
</style>
