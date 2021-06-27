<template>
  <div>
    <v-card-title>
      <span class="headline">{{ `Operation #${dialogData.id}` }}</span>
    </v-card-title>

    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field
                v-model="dialogData.id"
                readonly
                label="ID"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                v-model="dialogData.type.name"
                readonly
                label="Type"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                v-model="dialogData.equipmentNumber"
                readonly
                label="Equipment Number"
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
                v-model="dialogData.date"
                readonly
                label="Date"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                v-model="dialogData.performer"
                readonly
                label="Performer"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <div class="link">
              <a :href="dialogData.file.url" target="_blank">{{ dialogData.file.name }}</a>
            </div>
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
  padding-top: 10px;
  font-size: 18px;
}
</style>