<template>
  <nav>
    <v-snackbar v-model="snackbar" :timeout="5000" top color="success">
      <span>Disclaimer! Site is still under construction</span>
      <v-btn text color="white" @click="snackbar = false">CLOSE</v-btn>
    </v-snackbar>
    <v-app-bar app dark hide-on-scroll>
      <v-app-bar-nav-icon class="grey--text hidden-sm-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <template>
        <router-link to="/" class="routeLink">
          <v-toolbar-title class="text-uppercase grey-text">
            <span>The Comrade Club</span>
          </v-toolbar-title>
        </router-link>
      </template>

      <v-spacer></v-spacer>

      <div class="hidden-xs-only">
        <router-link to="/gallery" class="routeLink">
          <v-btn text>
            Gallery
            <v-icon right>mdi-collage</v-icon>
          </v-btn>
        </router-link>

        <router-link to="/about" class="routeLink">
          <v-btn text>
            <span>About</span>
            <v-icon right>mdi-yin-yang</v-icon>
          </v-btn>
        </router-link>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary app class>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title uppercase class="title">TheComradeClub</v-list-item-title>
          <v-divider></v-divider>
          <v-list-item-subtitle class="center">
            Welcome to The Comrade Club!💯
            <br />
            Empower | Captivate
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <br />

      <v-divider></v-divider>

      <br />

      <v-list nav>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>



<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      links: [
        { title: "Homepage", icon: "mdi-home", route: "/" },
        { title: "Gallery", icon: "mdi-collage", route: "/gallery" },
        { title: "About", icon: "mdi-yin-yang", route: "/about" }
      ],
      snackbar: true
    };
  }
};
</script>

<style scoped>

</style>