<template>
  <div class="home">
    <div class="top">
      <div class="nav flex-b">
        <div class="nav-left flex-b">
          <div class="flex">
            <img src="../assets/images/cnodejs_light.svg" alt />
          </div>
          <div class="ipt flex-s" :class="{colors:idx===1||idx===2||idx===3}">
            <i class="iconfont icon-sousuo"></i>
            <div>
              <input
                :class="{colors:(idx===1||idx===2||idx===3)}"
                @mouseenter="MouthEnters(1)"
                @mouseleave="MouthEnters(-1)"
                @focus="MouthEnters(2)"
                @blur="MouthEnters(-2)"
                type="text"
              />
            </div>
          </div>
        </div>
        <div class="nav-right flex-b">
          <div>首页</div>
          <div>新手入门</div>
          <div>API</div>
          <div>关于</div>
          <div>注册</div>
          <div>登录</div>
        </div>
      </div>
    </div>
    <div class="container flex-b">
      <div class="contain">
        <router-view></router-view>
      </div>
      <div class="aside"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      idx: 0
    };
  },
  methods: {
    MouthEnters(val) {
      this.idx += val;
    }
  },
  components: {}
};
</script>
<style scoped lang="scss">
.top {
  background: #444444;
}
.nav {
  width: 90%;
  height: 60px;
  margin: 0 auto;
  margin: 0 auto;
  background: #444444;
}
.nav-left {
  width: 30%;
}
.nav-left img {
  width: 100px;
}
.ipt {
  width: 200px;

  border-radius: 15px;
  padding: 2px 5px;
  background: #888;
}
.ipt input {
  border: none;
  outline: none;
  background: #888;
}
.colors {
  background: white !important;
}
.searchIcon {
  color: #ccc;
  font-size: 20px;
}
.nav-right {
  width: 27%;
  color: #ccc;
}
.aside {
  width: 24%;
  height: 100px;
  background: #444444;
}
.container{
    
    width: 90%;
    margin:20px auto;
}
.contain{
    width: 75%;
}
</style>