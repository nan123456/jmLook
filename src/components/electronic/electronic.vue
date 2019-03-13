<template>
	<swiper :options="swiperOption">
    <swiper-slide>
    	<workshopTask></workshopTask>
    </swiper-slide>
    <!-- <swiper-slide>
    	<workingCondition></workingCondition>
    </swiper-slide> -->
    <swiper-slide>
    	<abnormal></abnormal>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
import abnormal from '@/components/electronic/components/abnormal';
// import workingCondition from '@/components/electronic/components/workingCondition';
import workshopTask from '@/components/electronic/components/workshopTask';
export default {
  name: 'electronic',
  inject:['reload'],
  components: {
    abnormal,
    // workingCondition,
    workshopTask
  },
  data(){
  	return{
  		swiperOption: {
	      autoplay: { 
	      	delay:10000
	      }
      }
  	}
  },

  created: function () {
          setInterval(this.timer, 30000)
      },
  methods: {
    timer: function () {
      
      this.reload()
      console.log("nanan")
      }
  }
}
</script>

<style>
</style>