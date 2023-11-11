Vue.createApp({})
  .component("click-counter", {
    template:
      '<button @click="count++">You clicked me {{ count }} times.</button>',
    data() {
      return {
        count: 0,
      };
    },
  })
  .mount("#app");
