<template>
  <div class="clubHome">
    <!-- Full Page Carousel -->
    <v-carousel
      cycle
      touch
      hide-delimiter-background
      show-arrows-on-hover
      height="100%"
      delimiter-icon="mdi-fire"
      next-icon="mdi-page-last"
      prev-icon="mdi-page-first"
    >
      <v-carousel-item
        v-for="(carouselPic,i) in carouselimgs"
        :key="i"
        :src="carouselPic.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row class="fill-height" align="center" justify="center">
          <v-card flat elevation="24" dark>
            <section>
            <h1>{{ carouselPic.title }}</h1>
            </section>
          </v-card>
        </v-row>
      </v-carousel-item>
    </v-carousel>

    <v-container class="my-5">
      <!-- Welcome Section -->
      <v-card flat dark>
        <v-container ma-2>
          <v-row>
            <v-col lg12 align="center">
              <h1>Oyaah, uko na connections?</h1>
            </v-col>
          </v-row>
          <hr />
          <v-row>
            <v-col align="center">
              <p>Welcome to The Comrade Club!</p>
              <br />
              <p>Get your work done by fellow comrades 🤞</p>
            </v-col>
          </v-row>
        </v-container>
      </v-card>

      <!-- Services Section -->
      <v-card flat>
        <v-card-title>
          <v-col>
            <h1 align="center">Services We Offer:</h1>
          </v-col>
        </v-card-title>
        <v-row>
          <v-col lg6 align="center">
            <v-icon size="70" color="blue">mdi-cloud-tags</v-icon>
            <h3>Web Design</h3>
            <span>Let us build your first website for less. We'll help you create a beautiful website to impress and engage new customers – and establish your business online</span>
          </v-col>
          <v-col lg6 align="center">
            <v-icon size="70" color="yellow">mdi-music</v-icon>
            <h3>Beats Production</h3>
            <span>
              Choose the right beat for your music
              Reach out to our talented and dedicated crew and see why we are the best option for your next music project.
            </span>
          </v-col>
        </v-row>
      </v-card>
      <v-divider></v-divider>
      <v-card flat>
        <v-row>
          <v-col lg4 align="center">
            <v-icon size="70" color="red">mdi-camera</v-icon>
            <h3>Professional Photography</h3>
            <span>Looking to hire a photographer for an event? Weddings | Parties. Look no further!</span>
          </v-col>
          <v-col lg4 align="center">
            <v-icon size="70" color="pink">mdi-pencil-ruler</v-icon>
            <h3>Graphics Design</h3>
            <span>We maintain and improve professional-quality standards for printed products such as business cards, clothing, banners, cover designs, wall stickers, flyer design, and brochures.</span>
          </v-col>
          <v-col lg4 align="center">
            <v-icon size="70" color="purple">mdi-shopping-outline</v-icon>
            <h3>Content Marketing</h3>
            <span>We create amazing content architecture that satisfies search engines and users. Publishing placements in social media to get the audience’s attention.</span>
          </v-col>
        </v-row>
      </v-card>

      <!-- Two Column Section -->
      <v-card flat>
        <v-card-title>
          <h2>Let's Grow Together!</h2>
        </v-card-title>
        <v-row>
          <v-col>
            <h3>Our Mission and Vision</h3>
            <p>To build a sustainable organization for empowering young people to inspire change in their community.</p>
            <p>Our efforts target to increase access to youth-targeted temporary employment programs and to improve youth employability</p>
            <br />
          </v-col>
          <v-col>
            <v-img
              src="/img/thebossbaby.png"
              aspect-ratio="1"
              class="grey lighten-2"
              max-width="700"
              max-height="500"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-btn>Learn More</v-btn>
        </v-card-actions>
      </v-card>

      <br />

      <!-- Parallax -->
      <v-parallax height="300" src="/img/parallax.png"></v-parallax>

      <!-- Two Column Section -->
      <v-card flat>
        <v-card-title>
          <h2>Our Philosophy</h2>
        </v-card-title>
        <v-row>
          <v-col>
            <p>We know that greatness in a distruptive era requires bold ambition, curious talent and a culture that believes we're smarter together.</p>
            <p>We approach every challenge holistically, with best-in-class expertise in data, creativity media, technology, search, social and more. We call this Alchemy. It has the power to build our clients' brands and transform their business. And while it may seem like magic, we've got it down to a science.</p>
          </v-col>
          <v-col>
            <v-img src="/img/phil.png" max-width="700" max-height="800"></v-img>
          </v-col>
        </v-row>
        <hr class="my-4" />
      </v-card>

      <!-- Meet the Team Section -->
      <v-card shaped dark >
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
                <v-sheet class="text-center" height="200px">
                  <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
                    <v-icon>mdi-alpha-x-box</v-icon>
                  </v-btn>

                  <div class="my-3">View the Comrades' Profiles on the About Page</div>
                  <router-link to="/about">
                    <v-btn flat>About Page</v-btn>
                  </router-link>
                </v-sheet>
              </v-bottom-sheet>
            </div>
            </v-col>
          </v-card-actions>
        </v-container>
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
      sheet: false
    };
  }
};
</script>

<style scoped>
</style>