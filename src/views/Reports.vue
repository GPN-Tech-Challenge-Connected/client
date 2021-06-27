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
            v-model.number="companyID"
            label="Company ID"
            type="number"
        ></v-text-field>
      </v-col>
    </template>
  </TablePage>
</template>

<script>
import TablePage from "@/components/TablePage";
import operationsApi from "@/api/operations"
import equipmentApi from "@/api/equipment"
import _ from "lodash";

export default {
  name: "Reports",
  components: {TablePage},
  data: () => ({
    loading: false,
    title: 'SLA',
    tableData: [],
    page: 1,
    itemsTotalAmount: 20,
    headers: [
      {
        text: 'Company Name',
        value: 'companyName',
        sortable: false
      },
      {
        text: 'Equipment Quantity',
        value: 'equipmentLength',
        sortable: false
      },
      {
        text: 'Total Delay',
        value: 'totalDelay',
        sortable: false
      },
    ],
    companyID: null
  }),
  watch: {
    companyID: _.debounce(function () {
      this.getData()
    }, 300),
  },
  methods: {
    async getData() {
      this.loading = true
      const operationsData = await operationsApi.get({
        page: this.page,
        companyID: this.companyID
      })
      const equipmentData = await equipmentApi.get({
        page: this.page,
        companyID: this.companyID
      })
      const equipmentLength = equipmentData.items.length
      const totalPostponedTime = operationsData.items.reduce((acc, i) => {
        return acc += acc + i.postponedTime
      }, 0)
      const totalDelay = (totalPostponedTime/86400000).toFixed(2) + ' days'
      this.tableData = [{
        companyName: equipmentData.items[0].company.name,
        equipmentLength,
        totalDelay
      }]
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