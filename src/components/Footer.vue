<template>
  <v-footer dark padless>
    <v-card flat tile class=" purple darken-3 white--text text-center">
      <v-card-text>
        <v-btn v-for="(icon,i) in socialmedia" :key="i" class="mx-4 white--text" icon>
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text
        class="white--text pt-0"
      >Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>&copy; TheComradeClub</strong>
        <p>theRealBossBaby👑 Productions</p>
      </v-card-text>
    </v-card>
  </v-footer>
  
</template>

<script>
export default {
  data() {
    return {
      socialmedia: [
        {
          icon: "mdi-youtube",
          route: "https://www.youtube.com/channel/UCZPtg_dgYzqW8iCgT4XRoMg"
        },
        { icon: "mdi-twitter", route: "https://twitter.com/theBossBabyKe" },
        { icon: "mdi-instagram", route: "https://instagram.com/thebossbabyke" },
        { icon: "mdi-reddit", route: "https://reddit.com/u/bossbabyke" }
      ]
    };
  }
};
</script>

<style scoped>
</style>