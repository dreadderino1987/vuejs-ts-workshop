<template>
  <div class="nav">
    <router-link
      class="navItem"
      active-class="is-active"
      :to="{ name: 'books' }"
      >Home</router-link
    >
    <router-link
      class="navItem"
      active-class="is-active"
      :to="{ name: 'about' }"
      >About</router-link
    >
  </div>
</template>
<style>
.nav {
  display: flex;
  padding-left: 3em;
  width: 100vw;
  margin-bottom: 3em;
  background-color: cornflowerblue;
}
.navItem {
  height: 3em;
  padding-top: 1em;
  text-align: center;
  padding-right: 3em;
}
.is-active {
  background-color: bisque;
}
</style>
