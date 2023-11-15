/**
 * Vue component for displaying a plan.
 */
let PlanComponent = {
  template: "#plan-template",
  props: {
    name: { type: String, required: true },
  },
};
/**
 * PlanPickerComponent is a Vue component that displays a list of plans.
 */
let PlanPickerComponent = {
  template: "#plan-picker-template",
  components: {
    plan: PlanComponent,
  },
  data() {
    return {
      plans: ["The Single", "The Curious", "The Addict"],
    };
  },
};
const app = Vue.createApp({
  components: {
    "plan-picker": PlanPickerComponent,
  },
}).mount("#app");
