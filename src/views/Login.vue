<template>
  <v-container
      class="fill-height"
      fluid
  >
    <v-row
        align="center"
        justify="center"
    >
      <v-col
          cols="12"
          sm="8"
          md="4"
      >
        <form @submit.prevent="submit">
          <v-card class="elevation-12">
            <v-toolbar
                color="primary"
                dark
                flat
            >
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                    :loading="loading"
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="user.email"
                ></v-text-field>
                <v-text-field
                    :loading="loading"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="user.password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :disabled="!user.email || !user.password" :loading="loading" type="submit" color="primary">Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </form>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    loading: false,
    user: {
      email: '',
      password: ''
    }
  }),
  methods: {
    async submit() {
      this.loading = true
      try {
        await this.$store.dispatch('login', this.user)
        await this.$store.dispatch('createNotification', {
          message: 'Successfully logged in',
          type: 'success'
        })
        await this.$router.push('/equipment')
      } catch (e) {
        await this.$store.dispatch('createNotification', {
          message: e.data || 'Unknown error',
          type: 'error'
        })
      }
      this.loading = false
    }
  }
}
</script>

<style scoped>

</style>