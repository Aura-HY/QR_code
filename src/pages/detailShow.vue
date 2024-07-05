<template>
    <!-- <div class="video-background"> -->
    <div class="body">
      <div style="height: 26vh; display: flex; justify-content: center; align-items: flex-start;">
        <div v-ripple ></div>

        <var-app-bar
          title="xx群" 
          title-position="center" 
          color="linear-gradient(90deg, rgba(72,176,221,1) 0%, rgba(0,208,161,1) 100%)"
          style="width: 60%; margin-top: 180px;"v-ripple
          />
        </div>
        <div class="image-container">
        <img src="../../public/erweima.jpg" alt="Centered Image" class="centered-image">
      
      </div>
      <!-- <img src="../../public/chigua.gif" 
      alt="第二个正方形图片" style="width: 65vw; display: block; margin: 0 auto;" /> -->
      <video src="../../public/catmeme1.mp4" autoplay loop ></video>
      <!-- <source src="../../public/catmeme.mp4" type="video/mp4"> -->
    </div>
  </template>
  
  <style scoped>
  .body video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 确保视频填充整个容器 */
  z-index: -1; /* 将视频元素置于页面内容下方 */
}
  .background {
   height: 100vh; /* 视窗高度 */
   width: 100vw; /* 视窗宽度 */
   background-image: url('../../public/blue_star.jpg'); /* 背景图�路径 */
   background-size: cover; /* 图片覆盖整个容器 */
   background-position: center; /* 图片居中 */
   background-repeat: no-repeat;/* 不重复 */ 
  }
  .image-container{
   display:flex;
   justify-content:center;
   align-items:center;
   height:auto;/* 设置为自动高度 */
   margin-top :20px; 
  
  }
  
  .centered-image {
   width :55vw;/* 宽度为屏幕宽度的55%*/
   max-width :500px ;/* 最大宽度为500像素（可根据需要进行调整）*/
  }
  @media (max-width :768px){/* 在小于768像素宽的设备上应用以下样式*/
   .image-container{
     margin-top :10px ;/* 调整手机设备上图片与标题之间的间距*/}
  }
  
  .video-background {
   position: relative;
  width: 100%;
  height: 100%;
/* padding-bottom: 56.25%; 16:9 宽高比的视频容器 */
}

.video-background video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 确保视频填充整个容器 */
}
  </style>
  
  

<script>
import user from '@/api/user.js';
export default {
    data() {
        return {};
    },

    methods: {}
};
</script>

