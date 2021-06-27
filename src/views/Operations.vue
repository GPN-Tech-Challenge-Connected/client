<template>
  <TablePage
      :loading="loading"
      :table-data="tableData"
      :headers="headers"
      :title="title"
      :items-total-amount="itemsTotalAmount"
      @updatePage="updatePage"
  >
    <template v-slot:filters>
      <v-col cols="3">
        <v-text-field
            v-model.number="filters.typeID"
            label="Type ID"
            type="number"
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field
            v-model.number="filters.companyID"
            label="Company ID"
            type="number"
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field
            v-model="filters.equipmentNumber"
            label="Equipment Number"
        ></v-text-field>
      </v-col>
    </template>
    <template v-slot:dialog>
      <Dialog/>
    </template>
  </TablePage>
</template>

<script>
import TablePage from "@/components/TablePage";
import Dialog from "@/components/Operations/Dialog";
import api from "@/api/operations"
import _ from "lodash";

export default {
  name: "Operations",
  components: {TablePage, Dialog},
  data: () => ({
    loading: false,
    title: 'Operations',
    tableData: [],
    page: null,
    itemsTotalAmount: null,
    filters: {
      typeID: null,
      equipmentNumber: '',
      companyID: null
    },
    headers: [
      {
        text: 'ID',
        value: 'id',
        sortable: false
      },
      {
        text: 'Equipment Number',
        value: 'equipmentNumber',
        sortable: false
      },
      {
        text: 'Type',
        value: 'type.name',
        sortable: false
      },
      {
        text: 'Location',
        value: 'location',
        sortable: false
      },
      {
        text: 'Date',
        value: 'date',
        sortable: false
      },
      {text: 'Actions', value: 'actions', sortable: false},
    ]
  }),
  created() {
    if (this.$route.query.equipmentNumber) {
      this.$store.dispatch('hideDialog')
      this.filters.equipmentNumber = this.$route.query.equipmentNumber
    }
  },
  watch: {
    page: function () {
      if (this.page !== null) {
        this.getData()
      }
    },
    'filters.companyID': _.debounce(function () {
      this.getData()
    }, 300),
    'filters.typeID': _.debounce(function () {
      this.getData()
    }, 300),
    'filters.equipmentNumber': _.debounce(function () {
      this.getData()
    }, 300),
  },
  methods: {
    async getData() {
      this.loading = true
      const {items, count} = await api.get({
        page: this.page,
        companyID: this.filters.companyID,
        equipmentNumber: this.filters.equipmentNumber,
        typeID: this.filters.typeID
      })
      this.tableData = items.map(i => {
        const date = new Date(i.date)
        i.date = new Intl.DateTimeFormat('ru').format(date)
        return i
      })
      this.itemsTotalAmount = count
      this.loading = false
    },
    updatePage(page) {
      this.page = page
    }
  }
}
</script>

<style scoped>

</style>