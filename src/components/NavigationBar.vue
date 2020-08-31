<template>
  <div>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <v-list nav dense>
        <div class="my-2 text-center">
          <img
            :width="70"
            src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"
          >
          <h3>User</h3>
        </div>
        <v-divider class="mb-2"></v-divider>
        <template>
          <v-list-item-group v-model="model" link>
            <v-list-item>
              <v-list-item-content>
                <h3 class="text-center mt-5">Choose your file</h3>
                <input
                  type="file"
                  id="file_upload"
                  name="file_upload"
                  @change="selectFile"
                  accept=".pdf"
                  hidden
                >
                <v-btn small color="primary" class="mt-5" @click="clickBtn()">Select File Here</v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="hidden-sm-and-down">Title</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="logout()">
            <v-list-item-title>
              <v-icon>mdi-logout</v-icon>Log Out
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "NavigationBar",
  data: () => ({
    model: 1,
    drawer: null
  }),
  methods: {
    logout() {
      this.$router.push("/");
    },
    selectFile(event) {
      let file = event.target.files[0];
      this.$bus.$emit("loadFile", file);
    },
    clickBtn() {
      document.getElementById("file_upload").click();
      this.drawer = this.$vuetify.breakpoint.lgAndUp ? true : false
    }
  }
};
</script>
