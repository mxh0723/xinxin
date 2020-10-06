<template>
  <div class="city">
    <ul>
      <li
        v-for="(item, i) in items"
        :key="i"
        @click="fun"
        :class="i == 0 ? classA : classB"
      >
        {{ item.title }}
      </li>
    </ul>
    <div class="tag">
      <b>{{ content }}</b>
      <div class="city">
        <span v-for="(item, i) in citys" :key="i" @click="elcity">{{
          item
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cityjson",
  data() {
    return {
      items: null,
      content: "A",
      citys: ["阿拉善", "安庆", "安阳"],
      classA: "classA",
      classB: "",
      city: ""
    };
  },
  beforeMount() {
    this.axios({
      methods: "get",
      url: "/static/new.json"
    }).then(res => {
      this.items = res.data.city;
      console.log(res);
    });
  },
  methods: {
    fun(dev) {
      this.content = dev.srcElement.innerHTML;
      dev.path[1].childNodes.forEach(val => {
        val.style.backgroundColor = "#fff";
      });
      dev.path[0].style.backgroundColor = "#00bf49";
      this.items.forEach(val => {
        if (val.title == dev.srcElement.innerHTML) {
          this.citys = val.lists;
        }
      });
    },
    elcity(v) {
      console.log(v);
      this.city = v.srcElement.innerHTML;
      this.$store.commit("localcity", this.city);
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style scoped lang="less">
.city {
  background-color: #fff;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      width: 45px;
      height: 43px;
      text-align: center;
      line-height: 43px;
      padding: 0 12px 12px 0;
      font-size: 20px;
      border-radius: 5px;
    }
  }
  span {
    display: inline-block;
    text-align: center;
    width: 24%;
    height: 48px;
    line-height: 48px;
  }
  .classA {
    background-color: #00bf49;
  }
}
</style>
