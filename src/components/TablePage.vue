<template>
  <v-container>
    <h2>{{ title }}</h2>
    <div class="mb-5" v-if="$slots.filters">
      <v-row>
        <slot name="filters"></slot>
      </v-row>
    </div>
    <v-data-table
        :server-items-length="itemsTotalAmount"
        :headers="headers"
        :items="data"
        :loading="loading"
        :options.sync="options"
        class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon
            small
            class="mr-2"
            @click="showDetails(item)"
        >
          mdi-magnify
        </v-icon>
      </template>
    </v-data-table>
    <div v-if="$slots.dialog && $store.getters.dialog">
      <Dialog>
        <slot name="dialog"></slot>
      </Dialog>
    </div>
  </v-container>
</template>

<script>
import Dialog from "@/components/Dialog";
import {resolve} from "@/utils";

export default {
  name: "TablePage",
  components: {Dialog},
  data: () => ({
    itemsPerPage: 20,
    options: {
      itemsPerPage: 20
    },
    currentFilters: {}
  }),
  watch: {
    options: {
      handler() {
        this.$emit('updatePage', this.options.page)
      },
      deep: true,
    },
  },
  props: ['title', 'headers', 'tableData', 'loading', 'filters', 'page', 'itemsTotalAmount'],
  methods: {
    showDetails(item) {
      this.$store.dispatch('showDialog', item)
    },
    updateFilters(item) {
      const temp = {...this.currentFilters, [item.key]: item.value}
      this.currentFilters = temp
    },
    dropFilters() {
      this.currentFilters = {}
    }
  },
  computed: {
    data() {
      if (!Object.keys(this.currentFilters).length) return this.tableData

      let res = this.tableData
      for (let f in this.currentFilters) {
        res = res.filter(i => resolve(f, i) === this.currentFilters[f])
      }
      return res
    }
  }
}
</script>

<style scoped>
.filters-wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}
</style>