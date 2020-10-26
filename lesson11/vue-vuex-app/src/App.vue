<template>
  <div id="app">
    <HelloWorld msg="GitHub users" />
    <div class="users">
      <Users result="Array" />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Users from "./components/Users.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Users,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
