/**
 * Vue component for displaying a plan.
 */
let PlanItemComponent = {
  template: "#plan-template",
  props: {
    name: { type: String, required: true },
    selected: { type: Boolean, default: false },
  },
  methods: {
    select() {
      this.$emit("select", this.name);
    },
  },
};
/**
 * PlanPickerComponent is a Vue component that displays a list of plans.
 */
let PlanPickerComponent = {
  template: "#plan-picker-template",
  components: {
    PlanItem: PlanItemComponent,
  },
  data() {
    return {
      plans: ["The Single", "The Curious", "The Addict", "another Hack"],
      selectedPlan: null,
    };
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan;
    },
  },
};
const app = Vue.createApp({
  components: {
    "plan-picker": PlanPickerComponent,
  },
}).mount("#app");
