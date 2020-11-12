<template>
  <div id="app">
    <div class="navBlock">
      <router-link to="/" class="actionBtn">Home</router-link>
      <router-link to="/history/" class="actionBtn">All history</router-link>
      <router-link to="/history/delete" class="actionBtn">Deletion history</router-link>
      <router-link to="/history/added" class="actionBtn">Addition history</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navBlock {
  padding: 30px;
  .actionBtn {
    display: inline-block;
    vertical-align: top;
    margin: 10px 20px;
    padding: 5px 15px;
    border-radius: 5px;
    font-weight: bold;
    background-color: #2c3e50;
    color: #fff;
    line-height: 20px;
    text-decoration: none;
    &.router-link-exact-active {
      cursor: default;
      background-color: #42b983;
    }
  }
  a {
    font-weight: bold;
    color: #2c3e50;

  }
}
</style>
