<template>
  <v-app id="comradeClub">
    <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {  
  name: "App",
  components:{ 
    Navbar,
    Footer
  },
  data () {
    return {
      //
    }
  }
};
</script>

<style>
html, 
body {
    overflow-x: hidden;
}


</style>