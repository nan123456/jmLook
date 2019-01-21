<template>
	<div>
		<h2 class="header" style="text-align: center;">
			异常预警
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
  name: "abnormal",
  data() {
    return {
      columns: [
        {
          label: "异常预警类型",
          field: "type"
        },
        {
          label: "部件名称",
          field: "name"
        },
        {
          label: "异常时间",
          field: "time",
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
      axios.post(`${this.baseURL}/electronic/abnormal.php`).then(this.getDataInfoSucc)
   },
  	 getDataInfoSucc(res){
  	 	let success=res.data.pop()
    	res=res.data
    	if(success){
        this.rows = res
      }
//  	console.log(res)
    }
  }
};
</script>

<style>
  body{
    font-size:32px
  }
</style>