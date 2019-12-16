<template>
  <div class="index">
    <div class="nav flex-s">
      <div :class="{select:ids===1}" @click="select(1)">全部</div>
      <div :class="{select:ids===2}" @click="select(2)">精华</div>
      <div :class="{select:ids===3}" @click="select(3)">分享</div>
      <div :class="{select:ids===4}" @click="select(4)">问答</div>
      <div :class="{select:ids===5}" @click="select(5)">招聘</div>
      <div :class="{select:ids===6}" @click="select(6)">客户端测试</div>
    </div>

    <div
      class="topicsItem flex-b"
      :class="{sel:idx===index}"
      @mouseenter="entermouth(index)"
      @mouseleave="leavmouth(index)"
      @click="clicItem(item)"
      v-for="(item,index) in list"
      :key="index"
    >
      <!-- <div class="" v-show="(index/prePages)<currentPage&&(index/prePages)>=currentPage-1"> -->
      <div class="left flex-b">
        <img :src="item.author.avatar_url" alt="loading..." />
        <div>{{item.author.loginname}}</div>
        <div>{{item.reply_count}}/{{item.visit_count}}</div>
      </div>
      <div class="middle flex-s">
        <div v-if="item.top" class="toTop">置顶</div>
        <div v-else-if="item.tab==='ask'" class="answer">问答</div>
        <div v-else-if="item.good" class="toTop">精华</div>
        <div v-else class="answer">分享</div>

        <div
          class="title"
          :class="{til:titliIdx===index}"
          @mouseenter="entertitle(index)"
          @mouseleave="leavtitle()"
        >{{item.title}}</div>
      </div>
      <div class="right">
        <div>{{ lastTime(item.last_reply_at)}}</div>
      </div>
    </div>

    <!-- </div> -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="prePages"
        layout="total, sizes, prev, pager, next, jumper"
        :total="oldlist.length"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      ids: -1,
      idx: -1,
      titliIdx: -1,
      prePages: 5,
      list: [],
      oldlist: [],
      pageSizes: [5, 10, 15, 20],
      currentPage: 1
    };
  },
  props: {},
  components: {},
  methods: {
    clicItem(item){
   
      this.$router.push({name:"details",params:{item:item}})
    },
    leavtitle() {
      this.titliIdx = -1;
      
    },
    entertitle(index) {
      this.titliIdx = index;
    },
    entermouth(index) {
      this.idx = index;
    },
    leavmouth(index) {
      this.idx = -1;
    },
    select(val) {
      this.ids = val;
    },
    getTopics() {
      this.$axios
        .req("topics")
        .then(res => {
          console.log(res);
          this.oldlist = res.data;
          this.list = this.oldlist.filter((item, index) => {
            return index < 5;
          });
          console.log(this.list);
        })
        .catch(err => {
          console.log(err);
        });
    },
    lastTime(val) {
      //format('YYYY-MM-DD,hh:mm:ss')
      let time1 = this.$dayjs(val).valueOf();
      let time2 = Date.now();
      let time3 = Number(time2) - Number(time1);
      let time4 = time3 / 1000 / 60 / 60 / 24;
      if (time4 > 1) {
        return parseInt(time4) + "天前";
      } else if (time4 < 1) {
        return parseInt(time4 * 24) + "小时前";
      } else {
        return parseInt(time4 * 24 * 60) + "分钟前";
      }
    },
    handleSizeChange(val) {
      this.prePages = val;
      this.currentPage = 1;
      console.log(`每页 ${val} 条`);
      console.log(this.oldlist);
      this.list = this.oldlist.filter((item, index) => {
        return index < val;
      });
      console.log(this.list);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
      this.list = this.oldlist.filter((item, index) => {
        return (
          index < val * this.prePages && index >= (val - 1) * this.prePages
        );
      });
    }
  },
  mounted() {
    this.getTopics();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.topicsItem {
  height: 52px;
}
.nav {
  background: #f6f6f6;
  height: 40px;
  padding-left: 20px;
}
.nav > div {
  padding: 5px;
  margin-right: 1%;
  border-radius: 3px;
  color: #80bd01;
}
.select {
  background: #80bd01;
  color: white !important;
}
.toTop {
  font-size: 12px;
  height: 20px;
  display: flex;
  width: 35px;
  justify-content: center;
  align-items: center;
  background: #80bd01;
  border-radius: 3px;
  color: white;
}
.answer {
  height: 20px;
  display: flex;
  width: 35px;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border-radius: 3px;
  color: #888;
  background: #ccc;
}
.topicsItem img {
  width: 30px;
  height: 30px;
}
.middle {
  width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.middle > div:last-child {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.left {
  width: 20%;
}
.sel {
  background: #f5f5f5;
}
.til {
  text-decoration: underline;
}
</style>