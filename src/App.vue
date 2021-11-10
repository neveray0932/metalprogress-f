<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  },
};
</script>

<style lang="scss" >
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
}
body {
  margin: 0;
  padding: 0;
  background: #3d3d3b;
  background-image: url("https://uploads.codesandbox.io/uploads/user/c3fb8e8a-35ea-4232-b5d6-0f3c5373510b/LVs7-dots.png");
  background-size: contain;
}

</style>
