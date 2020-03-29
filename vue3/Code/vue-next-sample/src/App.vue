<template>
  <div>Hello {{ title }}</div>
  <div>{{ count }}</div>
  <div>{{ doubleCount }}</div>
  <div><button value="+" @click="increment">+</button>    
  </div>  
  <div><Button text="Foo"/></div>
  
</template>

<script>
  //export default{}
  //常用函数
  //-Data  数据组件
  //-Method 方法
  //-Hooks
  //-Computed计算属性
  //-Props组件传值
  //-Emit 事件触发
  //-Components子组件

  import  { defineComponent,ref,reactive,onMounted, computed} from 'vue'
  import Button from './Componets/Button.vue'

  export default defineComponent({
    components:{
      Button
    },
    //组件初始化的时候执行
    setup () {
      //为一个值创建应用
      //普通值 string number boolean 数据响应 需要用ref
      const count=ref(1)
      //对象需要数据响应 可以用reactive
      const state=reactive({
        message:'hello'
      })

      const doubleCount = computed(()=>count.value*2)

      const increment=(e)=>{
        console.log(e)
        count.value++
        state.message='world'
      }

      onMounted(()=>{
        console.log('mounted')
      })
      //所有网页中对象都在这个对象当中
      return {
        title:'vue.3.011111',
        count,
        increment,
        doubleCount
      }
    }
  })
</script>

<style>
div {
  color:blue;
}
</style>