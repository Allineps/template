<template>
  <v-app id="inspire">
    <v-app-bar :flat="true">
      <v-container class="align-center">
        <v-btn
          text="Alex Kocsis"
          variant="text"
          @click="$router.push('/')"
        ></v-btn>
        <v-avatar
          class="me-3"
          image="src/assets/profilepic.jpg"
          color="grey-darken-1"
          size="70"
        ></v-avatar>
      </v-container>
      <v-btn
        v-for="link in links"
        :key="link.name"
        :text="link.name"
        @click="$router.push(link.path)"
        variant="text"
      ></v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
      <landing-page/>
    </v-main>
  </v-app>
</template>
<script>
import router from "@/router";
import Login from "@/views/Login.vue";
import LandingPage from "@/views/LandingPage.vue";

export default {
  name: "outter",
  components: {LandingPage, Login},
  methods: {
    router() {
      return router
    }
  },
  data: () => ({
    links: [
      {name: 'About me & CV', path: 'aboutme'},
      {name: 'Projekts', path: 'aboutme'},
      {name: 'Messages', path: 'aboutme'},
      {name: 'Login', path: 'Login'},
    ],
  }),
}
</script>
<style scoped>

</style>
