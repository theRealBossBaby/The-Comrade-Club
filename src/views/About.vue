<template>
  <div class="about  purple darken-3 white--text">
    <v-container class="my-5">
      <h1 class="heading white--text">About Us</h1>

      <v-row>
        <v-flex xs12 sm6 md4 lg3 v-for="comrade in comrades" :key="comrade.phone">
          <v-card raised class="ma-3 white">
            <v-avatar size="150">
              <v-img :src="comrade.src" />
            </v-avatar>
            <v-card-title>
              <v-divider></v-divider>
              <div class="subheading">{{ comrade.name }}</div>
              <v-divider></v-divider>
              <br />
            </v-card-title>
            <v-card-text>
              <div class="grey--text">{{ comrade.role }}</div>
              <span>{{ comrade.pprofile }}</span>
            </v-card-text>
            <v-card-actions>
              <v-flex class="mt-2 mb-2">
                <v-row align="center" justify="space-around">
                  <v-icon>mdi-whatsapp</v-icon>
                  <v-icon>mdi-instagram</v-icon>
                  <v-icon>mdi-twitter</v-icon>
                </v-row>
              </v-flex>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  
  components: {},
  computed: {
    comrades() {
      return this.$store.state.comrades;
    }
  }
};
</script>

<style scoped>
.heading {
  color: #555;
}
.subheading {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.v-avatar {
  margin: 40px auto -60px;
  display: block;
  position: relative;
  top: -40px;
}
</style>
