<template>
  <TablePage
      :loading="loading"
      :table-data="$store.getters.equipmentList"
      :headers="headers"
      :title="title"
      :items-total-amount="itemsTotalAmount"
      @updatePage="updatePage"
  >
    <template v-slot:filters>
      <v-col cols="3">
        <v-text-field
            v-model="filters.number"
            label="Number"
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
            v-model="filters.parentNumber"
            label="Parent Number"
        ></v-text-field>
      </v-col>
    </template>
    <template v-slot:dialog>
      <Dialog/>
    </template>
  </TablePage>
</template>

<script>
import _ from 'lodash'
import TablePage from "@/components/TablePage";
import Dialog from "@/components/Equipment/Dialog";

export default {
  name: "Equipment",
  components: {TablePage, Dialog},
  data: () => ({
    loading: false,
    title: 'Equipment',
    page: null,
    itemsTotalAmount: null,
    headers: [
      {
        text: 'Number',
        value: 'number',
        sortable: false
      },
      {
        text: 'Name',
        value: 'name',
        sortable: false
      },
      {
        text: 'Company',
        value: 'company.name',
        sortable: false
      },
      {
        text: 'Type',
        value: 'type',
        sortable: false
      },
      {
        text: 'State',
        value: 'state',
        sortable: false
      },
      {text: 'Actions', value: 'actions', sortable: false},
    ],
    filters: {
      companyID: null,
      parentNumber: '',
      number: ''
    }
  }),
  watch: {
    page: function () {
      if (this.page !== null) {
        this.getData()
      }
    },
    'filters.companyID': _.debounce(function () {
      this.getData()
    }, 300),
    'filters.parentNumber': _.debounce(function () {
      this.getData()
    }, 300),
    'filters.number': _.debounce(function () {
      this.getData()
    }, 300),
  },
  methods: {
    async getData() {
      this.loading = true
      try {
        await this.$store.dispatch('getEquipmentList', {
          page: this.page,
          companyID: this.filters.companyID,
          parentNumber: this.filters.parentNumber,
          number: this.filters.number
        })
        this.itemsTotalAmount = this.$store.getters.equipmentsTotalAmount
      } catch (e) {
        await this.$store.dispatch('createNotification', {
          message: e.data || 'Unknown error',
          type: 'error'
        })
      }
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