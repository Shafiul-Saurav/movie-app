<script setup></script>

<template>
  <header>
    <router-link :to="{ name: 'home' }">
      <h2>Movies <span>App</span></h2>
    </router-link>
  </header>
  <main>
    <router-view> </router-view>
  </main>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@300;400;500;700;900&display=swap");
* {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  &::selection {
    background: transparentize($color: #34d399, $amount: 0.5);
  }
}

body {
  background-color: #374151;
}

a {
  text-decoration: none;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #111827;
  box-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.1);
}
h2 {
  font-size: 28px;
  color: #ffffff;
  span {
    color: #34d399;
  }
}
</style>
