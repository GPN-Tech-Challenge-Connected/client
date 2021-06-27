<template>
  <div>
    <v-card-title>
      <span class="headline">{{ `#${dialogData.number}` }}</span>
    </v-card-title>

    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field
                v-model="dialogData.number"
                readonly
                label="Number"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                v-model="dialogData.name"
                readonly
                label="Name"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                v-model="dialogData.type"
                readonly
                label="Type"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                v-model="dialogData.company.name"
                readonly
                label="Company Name"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                v-model="dialogData.location"
                readonly
                label="Location"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                v-model="dialogData.state"
                readonly
                label="State"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <RouterLink :to="`/operations?equipmentNumber=${dialogData.number}`" class="link">
              View all operations with this equipment
            </RouterLink>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Dialog",
  computed: mapGetters(['dialogData'])
}
</script>

<style scoped>
.link {
  font-size: 18px;
}
</style>