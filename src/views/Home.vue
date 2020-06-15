<template>
  <div class="clubHome purple darken-3 white--text">
    <div>
      <v-img
        dark
        min-height="400"
        max-height="700"
        src="img/main.jpg"
        gradient="to right top, purple, transparent"
      >
        <v-row class="fill-height" align="center" justify="center">
          <v-card dark>
            <v-card-title>
              <v-row>
                <v-col xs12 lg12 align="center">
                  <span class="center">Welcome to The Comrade Club!!</span>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-actions>
              <v-btn href="#deeds">What do we do?</v-btn>
              <v-btn href="#mission">Our Mission</v-btn>
              <v-btn href="#members">Who are we?</v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-img>
    </div>
    <v-container my-5 class>
      <!-- Welcome Section -->
      <v-card dark tile class>
        <v-container ma-2>
          <v-row>
            <v-col xs12 lg12 align="center">
              <h1>Oyaah, uko na connections?</h1>
            </v-col>
          </v-row>
          <v-divider class="white"></v-divider>
          <v-row>
            <v-col align="center">
              <p>Welcome to The Comrade Club!</p>
              <p>Get your work done by fellow comrades 🤞</p>
            </v-col>
          </v-row>
        </v-container>
      </v-card>

      <!-- Services Section -->
      <v-card dark id="deeds">
        <v-card-title>
          <v-col xs12 lg12>
            <h1 align="center">What We Do:</h1>
          </v-col>
        </v-card-title>
      </v-card>
      <v-row>
        <div class="d-flex flex-wrap">
          <v-col v-for="(service, i) in services" :key="i" align="center">
            <v-card shaped dark class="pt-3" min-width="200">
              <v-icon size="70" :color="service.color">{{ service.icon }}</v-icon>
              <br />
              <h4>{{ service.name }}</h4>
              <v-card-text>{{ service.text }}</v-card-text>
            </v-card>
          </v-col>
        </div>
      </v-row>

      <v-divider class="white"></v-divider>
      <v-divider class="white"></v-divider>
      <v-divider class="white"></v-divider>

      <br />
      <!-- Two Column Section -->
      <v-card dark class="pl-3 pr-3" id="mission">
        <v-card-title>
          <v-col xs11 lg12 align="center">Lets Grow Together!💪</v-col>
        </v-card-title>

        <v-row>
          <v-col sm="6">
            <h3>Our Mission and Vision</h3>
            <p>To build a sustainable organization for empowering young people to inspire change in their community.</p>
            <p>Our efforts target to increase access to youth-targeted temporary employment programs and to improve youth employability.</p>
          </v-col>
          <v-col sm="6">
            <v-img contain src="/img/rocket.jpg">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-card>

      <!-- Parallax -->
      <v-parallax height="300" src="/img/thebossbaby.png"></v-parallax>

      <!-- Meet the Team Section -->
      <v-card tile dark id="members">
        <v-container>
          <v-card-title>
            <v-row>
              <v-col align="center" justify="center">
                <h1>Meet The Team!</h1>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-actions>
            <v-col>
              <div class="text-center">
                <v-bottom-sheet v-model="sheet" inset persistent>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="orange" dark v-bind="attrs" v-on="on">Get Acquainted</v-btn>
                  </template>
                  <v-sheet dark class="text-center" height="200px">
                    <v-btn class="mt-6 navLinks" text color="error" @click="sheet = !sheet">
                      <v-icon>mdi-alpha-x-box</v-icon>
                    </v-btn>

                    <div class="my-3">View the Comrades' Profiles on the About Page</div>
                    <router-link to="/about">
                      <v-btn flat class="navLinks">About Page</v-btn>
                    </router-link>
                  </v-sheet>
                </v-bottom-sheet>
              </div>
            </v-col>
          </v-card-actions>
        </v-container>
      </v-card>

      <!-- Two Column Section -->
      <v-card dark flat class="pa-2">
        <v-card-title>
          <h2>Our Philosophy</h2>
        </v-card-title>
        <v-row>
          <v-col sm="6">
            <p>We know that greatness in a distruptive era requires bold ambition, curious talent and a culture that believes we're smarter together.</p>
            <p>We approach every challenge holistically, with best-in-class expertise in data, creativity media, technology, search, social and more. We call this Alchemy. It has the power to build our clients' brands and transform their business. And while it may seem like magic, we've got it down to a science.</p>
          </v-col>
          <v-col sm="6">
            <v-img src="/img/phil.png" max-width="700" max-height="800"></v-img>
          </v-col>
        </v-row>
        <hr class="my-4" />
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  computed: {
    carouselimgs() {
      return this.$store.state.carouselimgs;
    }
  },
  data() {
    return {
      sheet: false,
      services: [
        {
          name: "Web Design",
          text:
            "Let us build your first website for less. We'll help you create a beautiful website to impress and engage new customers and establish your business online.",
          icon: "mdi-cloud-tags",
          color: "blue",
          flex: 6
        },

        {
          name: "Beats Production",
          text:
            "Choose the right beat for your music! Reach out to our talented and dedicated crew and see why we are the best option for your next music project.",
          icon: "mdi-music",
          color: "yellow",
          flex: 6
        },

        {
          name: "Content Marketing",
          text:
            "We create amazing content architecture that satisfies search engines and users by publishing placements in social media to get the audience’s attention.",
          icon: "mdi-shopping-outline",
          color: "green",
          flex: 6
        },
        {
          name: "Graphics Design",
          text:
            "We maintain and improve professional-quality standards for printed products such as banners, clothes, cover designs, wall stickers, flyer design, and brochures.",
          icon: "mdi-pencil-ruler",
          color: "pink",
          flex: 6
        },
        {
          name: "Professional Photography",
          text:
            "Looking to hire a photographer for an event? Weddings | Parties. Look no further!",
          icon: "mdi-camera",
          color: "red",
          flex: 12
        }
      ]
    };
  }
};
</script>

<style scoped>
.navLinks {
  text-decoration: none;
}
</style>