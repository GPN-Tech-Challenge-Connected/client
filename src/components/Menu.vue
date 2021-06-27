<template>
  <v-list dense>

    <div v-for="(link, i) in links" :key="i">
      <v-list-item v-if="isVisible(link)" link :to="link.url">
        <v-list-item-content>
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>

    <v-list-item @click="logout" v-if="$store.getters.isLoggedIn">
      <v-list-item-content>
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "Menu",
  data: () => ({
    links: [
      {
        title: 'Login',
        url: '/login',
        loginRequired: false
      },
      {
        title: 'Equipment',
        url: '/equipment',
        loginRequired: true
      },
      {
        title: 'Operations',
        url: '/operations',
        loginRequired: true
      },
      {
        title: 'SLA',
        url: '/reports',
        loginRequired: true
      }
    ]
  }),
  methods: {
    isVisible(link) {
      return link.loginRequired === this.$store.getters.isLoggedIn
    },
    logout() {
      this.$store.dispatch('logout')
      this.$store.dispatch('createNotification', {
        message: 'Logged out',
        type: 'info'
      })
    }
  }
}
</script>

<style scoped>

</style>