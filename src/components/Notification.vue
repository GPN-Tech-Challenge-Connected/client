<template>
  <v-alert
      dismissible
      :type="data.type"
  >{{data.message}}</v-alert>
</template>

<script>
export default {
  name: "Notification",
  props: ['data'],
  methods: {
    close() {
      this.$store.dispatch('closeNotification', this.data.id)
    }
  }
}
</script>

<style scoped>

</style>