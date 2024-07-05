<template>
  <div class="top">
    <topGuid></topGuid>
  </div>
  <div class="input">
      <var-input variant="outlined" placeholder="请输入名称" v-model="QRname" />
    </div>
    <div class="upload">
        <var-uploader v-model="files" @after-read="handleAfterRead"/>
    </div>
    <div class="button">
        <var-button @click="create" style="width:94%;margin-top: 500px;margin-left: 10px;" color="linear-gradient(to right bottom, #2980E3, #D0BCFF)" block type="primary">确定</var-button>
    </div>
</template>

<script>
import topGuid from "../component/topGuid.vue"
export default {
    components:{
        topGuid
    },
    data(){
        return{
            QRname:'',
            files: []
        }
    },
    methods: {
    handleAfterRead(file) {
      console.log(file);
    }
    }
}
</script>

<style scoped>
.input{
    margin-top:40px;
    width: 90%;
    margin-left: 5%;
}
.upload{
    margin-top:20px;
    margin-left: 5%;
}
</style>