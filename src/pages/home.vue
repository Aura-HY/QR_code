<template>
    <div class="hello">
        <div class="hi">
            Hi~
        </div>
        <div class="name">
            {{ userName }}
        </div>
    </div>
    
    <div class="body">
        <div style="color: rgba(209, 209, 209, 1);margin-left: 20px;margin-top: 20px;">(长按编辑、删除)</div>
        <div class="card" v-for="QR in QRlist" :key="QR.QRid" style="margin-top: 20px" @contextmenu.prevent="openMenu($event, QR.QRid, true)">
            <div class="name1">
                {{ QR.name }}
            </div>
        </div>
        <div class="button" @click="goCreateQE">
        <var-button type="primary" round size="large">
            <var-icon name="plus" />
        </var-button>
        </div>
    </div>



    <ul
        v-show="quickMenuVisible"
        :style="{ left: quickMenu_left + 'px', top: quickMenu_top + 'px' }"
        class="contextmenu"
    >
        <li v-show="ifCan_rollBack" @click="rollBack">删除</li>
        <li @click="goUpdateQE">编辑</li>
    </ul>
</template>

<script>
export default {
    watch: {
    quickMenuVisible(value) {
      if (value) {
        document.body.addEventListener("click", this.closeMenu);
      } else {
        document.body.removeEventListener("click", this.closeMenu);
      }
    },
  },
    data() {
        return {
            ifCan_rollBack: false,
            index: null,
            quickMenu_left: 0,
            quickMenu_top: 0,
            quickMenuVisible: false,
            userName:'123',
            QRlist: [
                {name: '网协',QRid:'1'},
                {name: '123',QRid:'2'},
            ]

        }
    },
    mounted() {

    },
    methods: {
        goCreateQE(){
            this.$router.push({
                name: 'createQE',
            });
        },
        goUpdateQE(){
            this.$router.push({
                name: 'updateQE',
            });
        },
        // 撤回消息
        async rollBack() {
            await user.deleteMessage(this.chatRecordList[this.index].messageId);
            this.chatRecordList.splice(this.index, 1);
        },
         // 显示右键快捷菜单
        openMenu(e, index, ifCan_rollBack) {
        
            this.ifCan_rollBack = ifCan_rollBack;
            
            this.index = index;
            this.quickMenu_top = e.clientY;
            this.quickMenu_left = e.clientX;
            this.quickMenuVisible = true;
        },
        // 隐藏右键快捷菜单
        closeMenu() {
            this.quickMenuVisible = false;
        },
    },
}
</script>

<style scoped>
.hello{
    position: relative;
    height: 15%;
    width: 100vw;
    background:linear-gradient(to right, #69dbaa, #3a7afe);
    box-shadow: 0px 10px 1px 1px rgb(249, 247, 247);
}
.hi{
    position: absolute;
    top:20%;
    left: 10%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: xx-large;
    color: aliceblue;
}
.name{
    position: absolute;
    top:50%;
    left: 10%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: xx-large;
    color: aliceblue;
}
.card{
    opacity: 1;
background: rgba(255, 255, 255, 1);
border: 1px solid rgba(229, 229, 229, 1);
margin:4%;
padding:25px;
border-radius: 10px;
font-family:'Times New Roman', Times, serif;

}
.body{
    height: 85%;
    overflow: auto;
}
.name1{
    width: 40px;
    height: 40px;
    margin-top:7px;
    font-size: large;
}
.button {
 position: fixed;
 bottom: 20px; /* 距离底部20像素 */
 right: 20px; /* 距离右侧20像素 */
 padding: 15px 32px;
 background-color: #ffffff; /* 绿色 */
 color: white;
 border: none;
 text-align: center;
 text-decoration: none;
 display: inline-block;

/* 悬停状态 */
}

/* 悬停状态 */
.button:hover {
    background-color:#fefefe; /* 较深的绿色 */
}
/* 右键快捷菜单的样式 */
.contextmenu {
  margin: 0;
  background: #fff;
  z-index: 3000;
  position: absolute;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
}

.contextmenu li {
  margin: 0;
  padding: 7px 16px;
  cursor: pointer;
}

.contextmenu li:hover {
  background: #eee;
}
</style>