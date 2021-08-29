<template>
  <div class="case-container wp-100">
    <div class="bc-fff flex jc-sa fw-w list">
      <div v-for="(item, index) in list" :key="index" class="item ta-c">
        <div>
          <img :src="item.imageUrl" alt="" />
        </div>
        <span class="fs-12">{{ item.title }}</span>
      </div>
    </div>
    <Loading v-if="isLoading" />
    <Footer />
  </div>
</template>

<script>
import { caseRequest } from "api";
import Footer from "components/Footer";
import Loading from "components/Loading";
export default {
  data() {
    return {
      list: [],
      isLoading: true,
    };
  },

  components: {
    Footer,
    Loading,
  },

  created() {
    this.getCaseList();
  },

  methods: {
    getCaseList() {
      caseRequest.fetchCaseList().then((res) => {
        this.list = res.list;
        this.isLoading = false;
      });
    },
  },
};
</script>

<style lang='less' scoped>
.list {
  padding: 15px 5px;
  padding-bottom: 0;
  box-sizing: border-box;
  margin-bottom: 55px;

  .item {
    height: 200px;
  }
}
</style> 