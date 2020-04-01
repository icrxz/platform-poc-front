 
<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-tooltip bottom></v-tooltip>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form">
              <v-text-field v-model="user.email" :counter="20" label="Email" type="email" required></v-text-field>

              <v-text-field
                v-model="user.password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                label="Password"
                required
                @click:append="show = !show"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="mb-3">
            <div class="flex-grow-1"></div>
            <v-btn color="success" @click="handleSubmit" class="mr-4">Entrar</v-btn>
            <v-btn color="error" @click="resetForm" class="reset">Resetar Form</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      show: false,
      user: {
        email: null,
        password: null
      },
      userDetails: {}
    };
  },
  methods: {
    ...mapActions({
      loginAction: "Login/loginAction"
    }),
    resetForm() {
      this.$refs.form.reset();
    },
    handleSubmit() {
      const userDetails = {
        email: this.user.email,
        password: this.user.password
      };
      this.loginAction(userDetails)
        .then(() => {
          this.resetForm();
          this.$router.push("/home");
        })
        .catch(err => {
          console.log(err);
          this.resetForm();
        });
    }
  }
};
</script>