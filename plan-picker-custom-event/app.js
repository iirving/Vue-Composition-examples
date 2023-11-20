/**
 * Vue component for displaying a plan.
 *
 * @typedef {Object} PlanItemComponent
 * @property {string} name - The name of the plan.
 * @property {boolean} selected - Indicates if the plan is selected.
 *
 * @property {Function} select - Method to select the plan.
 * @fires PlanItemComponent#select
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
 *
 * @typedef {Object} PlanPickerComponent
 * @property {Array<string>} plans - The list of plans.
 * @property {string|null} selectedPlan - The currently selected plan.
 *
 * @property {Function} selectPlan - Method to select a plan.
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
