<template>
  <div class="filters-wrapper mb-5">

    <div class="select-wrap">
      <v-select
          v-for="(item, i) in filterObjects"
          :key="i"
          :items="item.filters"
          :label="item.name"
          item-text="label"
          item-value="value"
          v-model="values[item.name]"
          @change="update({key: item.valName, value: values[item.name]})"
          class="search-select"
      ></v-select>
    </div>

    <v-btn
        class="mx-2 ml-10"
        dark
        small
        color="secondary"
        @click="dropFilters"
    >
      drop filters
      <v-icon dark>
        mdi-close
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import {resolve} from "@/utils";

export default {
  name: "Filters",
  props: ['filters', 'data'],
  methods: {
    update(i) {
      this.$emit('update', i)
    },
    dropFilters() {
      this.values = {}
      this.$emit('dropFilters')
    }
  },
  data: () => ({
    values: {}
  }),
  computed: {
    filterObjects() {
      const res = []
      const processed = []
      for (let filter of this.filters) {
        const f = {
          name: filter.labels,
          valName: filter.values,
          filters: []
        }
        for (let obj of this.data) {
          const val = resolve(filter.values, obj)
          if (!processed.includes(val)) {
            const r = {value: val}
            if (filter.labels) {
              r['label'] = resolve(filter.labels, obj)
            }
            processed.push(r.value)
            f.filters.push(r)
          }
        }
        res.push(f)
        processed.length = 0
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

.select-wrap {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 0;
}

.search-select {
  flex: 1 1 0;
  margin-right: 20px;
}
</style>