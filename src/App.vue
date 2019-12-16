<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import '//at.alicdn.com/t/font_1566277_6d7qal9jkoe.css';
@import "./styles/common";
//@import "./assets/reset";

.flex-b {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
}
.flex-a {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
}
.flex-c {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
.flex-s {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;
}
</style>
