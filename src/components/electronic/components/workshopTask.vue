<template>
	<div>
		<h2 class="header" style="text-align: center;">
			车间任务
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
  name: "Workshoptask",
  data() {
    return {
      columns: [
        {
          label: "车间编号",
          field: "Serial"
        },
        {
          label: "任务名称",
          field: "name"
        },
        {
          label: "执行班组",
          field: "Group"
        },
        {
          label: "班组长姓名",
          field: "bzzname"
        },
        {
          label: "计划完成时间",
          field: "time",
          type:"date",
          dateInputFormat: 'YYYY-MM-DD',
          dateOutputFormat: 'YYYY-M-Do',
        },
        {
          label: "是否完成",
          field: "finished",
        },
        {
          label: "备注",
          field: "Remarks"
        }
      ],
      rows: []
    };
  },
  created(){
  	this.getDataInfo()
  },
  methods:{
  	getDataInfo () {
      console.log(this.baseURL)
        axios.post(`${this.baseURL}/electronic/WorkshopTask.php`).then(this.getDataInfoSucc)
   },
  	 getDataInfoSucc(res){
    	res=res.data
//  	console.log(res)
    	if(res[res.length-1].success){
				res.pop()
        this.rows = res;
      }
//  	console.log(res)
    }
  }
};
</script>

<style scoped>
</style>