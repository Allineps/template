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
          size="48"
        ></v-avatar>
      </v-container>
      <v-btn
        v-for="link in links"
        :key="link"
        :text="link"
        @click="$router.push(link)"
        variant="text"
      ></v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
      <v-navigation-drawer v-model="drawer"  :class="menu != null ? classess(String) : 'bg-pink'">
        <!-- -->
    <v-list v-for="item in menu">
      <v-list-item v-if="typeof item.subs == 'undefined' && item.subs == null "
       prepend-icon=""
       :title="item.name"
       :value="item.name" >
      </v-list-item>
      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item v-if="typeof item.subs !== 'undefined' && item.subs !== null"
            v-bind="props"
            prepend-icon=""
            :title="item.name"
          ></v-list-item>
        </template>
        <!-- second level -->
        <v-list v-for="sub in item.subs">
        <v-list-item v-if="typeof sub.subs == 'undefined' && sub.subs == null "
       :title="sub.name"
       :value="sub.name" >
      </v-list-item>
        <v-list-group v-if="typeof sub.subs !== 'undefined' && sub.subs !== null" >
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :title="sub.name"
            ></v-list-item>
          </template>

        <!-- third level -->
          <v-list-item
            v-for="sub1 in sub.subs"
            :title="sub1.name"
            :value="sub1.name"
          ></v-list-item>
        </v-list-group>
      </v-list>
      </v-list-group>

    </v-list>
      </v-navigation-drawer>
      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Application</v-app-bar-title>
      </v-app-bar>
      <v-main>
        <Home/>
        <!--  -->
      </v-main>0
    </v-app>
  </template>

  <script setup>
 const drawer = ref(null)
  </script>

  <script>
 import { ref } from 'vue';
 import { mapState } from 'vuex'
 import Home from '@/views/Home.vue';

    export default {
      beforeMount() {
        console.log(this.menu);
        //
      },
      selected: 0,
        components:{
            Home
         },
          data() {
          return {
            links: [
              'About me & CV',
              'Projekts',
              'Messages',
              'logout',
            ],
            menu1: [],
              drawer: null,
              status: '300',
          }
          } ,
        computed: {
            // Get 'menu' from store.
            ...mapState([
                'menu'
            ])
        },
        methods: {
        classess() {
          if (this.status == '200') {
            return 'bg-amber';
          }
          if (this.status == '300') {
            return "bg-deep-orange";
          } else {
            return "bg-red-lighten-3";
          }
        }
      },
}
  </script>
