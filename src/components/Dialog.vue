<template>
  <v-dialog v-model="$store.getters.dialog" max-width="800px" persistent>
    <v-card>

      <slot></slot>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="blue darken-1"
            text
            @click="close"
        >
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Dialog",
  methods: {
    close() {
      this.$store.dispatch('hideDialog')
    }
  }
}
</script>

<style scoped>

</style>