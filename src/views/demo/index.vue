<template>
  <div class="knowledge-container">
    <van-tabs v-model="active" sticky animated>
      <van-tab
        :title="item.name"
        v-for="(item, index) in konwledgeList"
        :key="index"
        class="item bc-fff mt-5"
      >
         <div class="big" v-if="active == 1">
            <span class="fs-14">{{ item.langDec }}</span>
            <div class="wp-100">
              <img :src="item.bigImg" alt="" class="wp-100" />
            </div>
          </div>
        <div class="list">
          <div
            v-for="(item_list, item_index) in item.list"
            :key="item_index"
            class="mb-10"
          >
            <p class="mb-10 fs-14">{{ item_list.dec }}</p>
            <div class="img-list flex jc-sb">
              <img
                :src="image"
                alt=""
                v-for="(image, image_index) in item_list.imageUrls"
                :key="image_index"
              />
            </div>
          </div>
          <div class="big" v-if="active != 1">
            <span class="fs-14">{{ item.langDec }}</span>
            <div class="wp-100">
              <img :src="item.bigImg" alt="" class="wp-100" />
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <Loading v-if="isLoading" />
  </div>
</template>

<script>
import { konwledgeRequest } from "api";
import Loading from "components/Loading";
export default {
  data() {
    return {
      active: 0,
      konwledgeList: [],
      isLoading: true,
    };
  },
  created() {
    this.getKonwledgeList();
  },
  methods: {
    getKonwledgeList() {
      konwledgeRequest.fetchKonwledgeList().then((res) => {
        this.konwledgeList = res.konwledgeList;
        console.log(res);
        this.isLoading = false;
      });
    },
  },

  components: {
    Loading,
  },
};
</script>

<style scoped lang="less">
.item {
  padding: 10px;
  box-sizing: border-box;
}
</style>