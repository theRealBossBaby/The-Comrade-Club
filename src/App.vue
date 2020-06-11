<template>
  <v-app id="comradeClub" class="grey lighten-4">
    <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
  <Footer />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
#comradeClub{
  font-family: Ubuntu;
  height: 100vh;
}
.routeLink {
  text-decoration: none;
}
</style>