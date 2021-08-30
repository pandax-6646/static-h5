export default {
  methods: {
    /**
     * 确认弹窗
     * @param {*} success   点击确认后要执行的函数
     * @param {*} fail      点击取消后要执行的函数
     * @param {*} title     弹窗的标题
     * @param {*} msg       弹窗提示的内容
     */
    dialog(
      success,
      fail = () => {
        this.$toast.success("已取消");
      },
      title = "提示",
      message = "是否确认删除"
    ) {
      Dialog.confirm({
        title,
        message,
      })
        .then(success)
        .catch(fail);
    },
  },
};
