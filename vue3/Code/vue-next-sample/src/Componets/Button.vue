<template>
  <button>{{ text }}</button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent ({
  props:{
    text:String
  },
  setup (props) {
    //console.log(props)
    // return {
    //     props
    // }
  }  
})
</script>