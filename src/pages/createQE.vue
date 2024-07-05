<template>
    <div class="top">
        <topGuid></topGuid>
    </div>
    <div class="input">
        <var-input variant="outlined" placeholder="请输入名称" v-model="QRname" />
    </div>
    <div class="upload">
        <van-uploader :after-read="resolveQR" />
        <div id="qrcode"></div>
    </div>
    <div class="button">
        <var-button @click="createqr" style="width:94%;margin-top: 500px;margin-left: 10px;" color="linear-gradient(to right bottom, #2980E3, #D0BCFF)" block type="primary">生成</var-button>
    </div>
    <var-popup v-model:show="center">
        <div class="popup-example-block" id="qrcode" ref="qrcode">

        </div>
  </var-popup>
</template>
  
<script>
import topGuid from "../component/topGuid.vue"
// // import QrCode from 'jsqrcode';
import {getQrUrl} from '../utils/qrcode'
import { showToast } from 'vant';
import QRCode from '../../common/js/qrcode.js'
// import VueQr from 'vue-qr'
export default {
    // watch: {
    //     url(value) {
    //         const qr = new QRCode(document.getElementById("qrcode"), {
    //             text: value,
    //             width: 200,
    //             height: 200
    //         });
    //     }
    // },
    components:{
        topGuid,
        QRCode
    },
    data(){
        return{
            QRImgUrl: "",
            QRname:'',
            upurl:null,
            center:false
        }
    },
    methods: {
    handleAfterRead(file) {
      console.log(file);
    },
    resolveQR(event) {
      const result = getQrUrl(event.file)
      result.then(res => {
        if (res.data) {
            this.upurl=res.data;
            this.$nextTick (function () {
                let qrcode = new QRCode('qrcode', {  
                    width: 232,  // 设置宽度 
                    height: 232, // 设置高度
                    text:res.data 
                })
            })
          console.log(res.data,'二维码内容')
          showToast(res.data)
        //   Toast('识别二维码成功!')
        } else {
            showToast('识别二维码失败, 请重新上传')
        }
      }).catch(err => {
        showToast(JSON.stringify(err))
      })
    },
    // qrcode () {
    //     let qrcode = new QRCode('qrcode', {  
    //         width: 232,  // 设置宽度 
    //         height: 232, // 设置高度
    //         text:this.upurl 
    //     })
    // },
    createqr(){
        console.log(1);
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
.popup-example-block {
  padding: 20px 24px;
  width: 250px;
}
</style>