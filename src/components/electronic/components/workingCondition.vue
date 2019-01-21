<template>
	<div>
		<h2 class="header" style="text-align: center;">
			班组工作情况
		</h2>
		<div>
	    <vue-good-table
	      :columns="columns" 
	      :rows="rows"
	      :lineNumbers="true"
	    >
	    <template slot="table-row" slot-scope="props">
	      <span v-if="props.column.field == 'operate'">
	        <el-button type="danger" icon="el-icon-warning" circle></el-button>
	      </span>
	      <span v-else>
	        {{props.formattedRow[props.column.field]}}
	      </span>
	    </template>
	    </vue-good-table>
  	</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
  name: "workingcondition",
  data() {
    return {
      columns: [
        {
          label: "班组编号",
          field: "Serial"
        },
        {
          label: "部件名称",
          field: "name"
        },
        {
          label: "产品类型",
          field: "type"
        },
        {
          label: "计划完成时间",
          field: "time",
          type:"date",
          dateInputFormat: 'YYYY-MM-DD',
          dateOutputFormat: 'YYYY-M-Do'
        },
        {
          label: "工作进度",
          field: "schedule"
        },
        {
          label: "备注",
          field: "Remarks"
        }
      ],
      rows: []
    };
  },
  mounted(){
  	this.getDataInfo()
  },
  methods:{
  	getDataInfo () {
      axios.post(`${this.baseURL}/electronic/workingcondition.php`).then(this.getDataInfoSucc)
   },
  	 getDataInfoSucc(res){
  	 	let success = res.data.pop()
  	 	res = res.data
    	if(success){
        this.rows = res
      }
//  	console.log(res)
    }
  }
};
</script>

<style lang="">
  body{
    font-size:32px
  }
</style>