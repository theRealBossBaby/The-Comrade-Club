<template>
  <nav class="overflow-hidden">

    <!-- Snackbar -->
    <v-snackbar v-model="snackbar" :timeout="5000" top color="success">
      <span>Disclaimer! Site is still under construction</span>
      <v-btn text color="white" @click="snackbar = false">CLOSE</v-btn>
    </v-snackbar>


    <v-app-bar flat dark class="grey darken-3" elevate-on-scroll>      

      <v-spacer></v-spacer>

      <router-link to="/" class="navLinks">
        <v-toolbar-title>The Comrade Club</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon class="hidden-sm-and-up" @click="drawer = true"></v-app-bar-nav-icon>
      <section class="hidden-xs-only flex">
        <router-link to="/showcase" class="navLinks">
          <v-btn text>ShowCase</v-btn>
        </router-link>

        <router-link to="/about" class="navLinks">
          <v-btn text>About</v-btn>
        </router-link>
      </section>
    </v-app-bar>

    <v-navigation-drawer absolute right dark v-model="drawer" class="grey darken-2">
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="/img/brand.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>The Comrade Club</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-row align="center" justify="center">Empower | Captivate</v-row>
      </v-list-item>

      <v-divider></v-divider>

      <v-list rounded>
        <v-list-item v-for="(link,i) in links" :key="i" router :to="link.route">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{ link.title }}</v-list-item-content>
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
      snackbar: true,
      drawer: false,
      links: [
        { title: "Homepage", icon: "mdi-home", route: "/" },
        { title: "ShowCase", icon: "mdi-collage", route: "/showcase" },
        { title: "About", icon: "mdi-yin-yang", route: "/about" }
      ]
    };
  }
};
</script>

<style scoped>
.navLinks{
  text-decoration: none;
  color: inherit;
}
</style>