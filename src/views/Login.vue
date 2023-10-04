<template >
  <div class="d-flex align-center justify-center bg-cyan-lighten-2 h-screen" >
    <v-card  class='d-flex justify-center mb-8 w-33 h-auto rounded-xl rounded-be-0'>
      <v-sheet class="ma-5 pa-5" >
        <v-form fast-fail @submit.prevent="login">
          <v-text-field v-model="username" label="User Name"></v-text-field>
          <v-text-field v-model="password" label="password"></v-text-field>
          <a href="#" class="text-body-2 font-weight-regular">Forgot Password?</a>

          <v-btn type="submit" color="primary" :block="true" class="mt-2">Sign in</v-btn>

        </v-form>
        <div class="mt-2">
          <p class="text-body-2">Don't have an account? <a href="#">Sign Up</a></p>
        </div>
      </v-sheet>
    </v-card>
  </div>
</template>
<script>
import router from "@/router";

export default {
  name:'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Your login logic here
      if(this.username.length >=5)
      if (this.username === 'asdasd' || this.password === 'asd'){
        router.push('/home');
      }
    },
  },
}
</script>
