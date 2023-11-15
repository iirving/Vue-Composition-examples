/**
 * Vue application instance.
 * @typedef {Object} VueApp
 * @property {Function} component - Vue component function.
 * @property {Function} mount - Mounts the Vue app to a DOM element.
 */

/**
 * Creates a new Vue application instance.
 * @function
 * @returns {VueApp} A new Vue application instance.
 */
/**
 * The Vue application instance.
 * @type {Object}
 */
const app = Vue.createApp({
  /**
   * Returns the data object for the Vue component.
   * @returns {Object} The data object containing the plans array.
   */
  data() {
    return {
      plans: ["The Single", "The Curious", "The Addict"],
    };
  },
})
  .component("plan", {
    template: "#plan-template",
    props: {
      name: { type: String, required: true },
    },
  })
  .mount("#app");
