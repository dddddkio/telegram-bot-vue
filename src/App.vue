<template>
  <div style="margin-top:5vh">
    <div>Your current points balance is: <text class="text-bold text-black" style="font-size: large;">xxx</text></div>
    <div style="margin-top:10px;margin-bottom: 15px;">Just pay and get points now:</div>

    <el-table ref="table" :data="tableData" style="width: 100%" @row-click="handleRowClick" highlight-current-row>
      <el-table-column prop="Combo" label="Combo" />
      <el-table-column prop="Points" label="Points" />
      <el-table-column prop="UnitPrice" label="Unit Price" />
    </el-table>

    <el-button type="success" style="margin-top:3vh;width:100%" @click="handleButtonClick">Pay</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          Combo: "$4.99",
          Points: "50",
          UnitPrice: "$0.1",
        },
        {
          Combo: "$21.99",
          Points: "300",
          UnitPrice: "$0.073",
        },
        {
          Combo: "$78.99",
          Points: "1500",
          UnitPrice: "$0.0526",
        },
        {
          Combo: "$129.99",
          Points: "3000",
          UnitPrice: "$0.0433",
        },
      ],
    };
  },
  methods: {
    
    handleRowClick(row, event) {
      console.log('选中了第' + (this.tableData.indexOf(row) + 1) + '行');
      console.log(row)
      Telegram.WebApp.close()
    },
  },
};

</script>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.row-selected {
  background-color: #e6f7ff !important;
}
</style>
