<template>
  <div class="gallery">
    <v-container class="my-5">
      <h1 class="heading">The Gallery</h1>

      <v-row>
        <v-col justify="center" align="center">
          <h1>Oops . . .</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card class="mx-auto">
            <v-container>
              <v-row justify="space-around" >
                <v-avatar color="deep-purple accent-4" size="40">
                  <v-icon icon="mdi-lock" color="white">mdi-lock</v-icon>
                </v-avatar>
                <v-sheet >
                  <h3>This Page is Currently unavailable!</h3>
                  <h5>The Page is currently under development</h5>
                </v-sheet>
              </v-row>
            </v-container>
            <v-card-actions>
              <v-row>
              <router-link to="/" class="routeLink">
                <v-btn text color="deep-purple accent-4">Back to Homepage</v-btn>
              </router-link>
              <router-link to="/about" class="routeLink">
                <v-btn text color="deep-purple accent-4">Go to About Page</v-btn>
              </router-link>
              </v-row>
            </v-card-actions>
          </v-card>

          <!-- <v-banner two-line elevation="24">
            <v-avatar slot="icon" color="deep-purple accent-4" size="40">
              <v-icon icon="mdi-lock" color="white">mdi-lock</v-icon>
            </v-avatar>This Page is Currently unavailable!
            <template v-slot:actions>
              
            </template>
          </v-banner>-->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>