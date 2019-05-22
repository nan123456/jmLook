<template>
	<div>
		<h2 class="header">
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
          label: "部件名称",
          field: "name"
        },
        {
          label: "工位",
          field: "Group"
        },
        {
          label: "排产时间",
          field: "time"
        },
        {
          label: "交付时间",
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
    let arr = ''
    let value = this.$route.query.workshop
    if(value=='K'){
        arr ='("K","K坡")'
      }else if(value == 'S'){
        arr ='("S安装补贴","S玻璃钢","S厂检","S电气","S调试","S钢结构","S国（省）检","S派人维修","S移交客户","S座舱")'
      }else if(value == 'F'){
        arr ='("F成型","F翻模","F模具","F喷涂","F装配","M木工")'
      }else if(value == 'G'){
        arr ='("GS","G接线","G装灯","G装箱")'
      }else if(value == 'T'){
        arr ='("T粗","T淬","T调","T发黑","T焊","T划线","T坡","T退","T线","T正火","T装")'
      }else if(value == "TK"){
        arr ='("TK")'
      }else if(value == 'I'){
        arr ='("IA","IA1","IB","ID","IG","IS","I钻")'
      }else if(value == 'L'){
        arr ='("LK","L焊","L转","L装")'
      }else if(value == "J"){
        arr ='("J探")'
      }else if(value == 'W'){
        arr ='("FW成型","FW成型底漆","FW底漆","FW面漆","FW模具","TW半精车","TW插","TW粗车","TW调质","TW高频","TW滚","TW精车","TW拉","TW磨","TW刨","TW镗","TW铣","TW线割","W彩锌","W冲压","W镀铬","W镀锌","W发黑","W发泡","W改制","W回火","W机","W浸","W卷","W喷塑","W漆","W渗氮","W折","W退火")'
      }
    this.getDataInfo(arr)
  },
  methods:{
  	getDataInfo (arr) {
        var fd = new FormData()
        fd.append("arr",arr)
        axios.post(`${this.baseURL}/electronic/WorkshopTask.php`,fd).then(this.getDataInfoSucc)
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

<style scope>
  body {
    font-size:32px  !important;
  }

  
  table.vgt-table{
    font-size: 38px !important;
    color: #606266 !important;
  }
</style>