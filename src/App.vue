<template>
  <v-app>
    <NavBar/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavigationBar.vue";
export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>