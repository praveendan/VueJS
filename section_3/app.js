const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: [],
      isListShown: true
    };
  },
  computed: {
    buttonCaption() {
      return this.isListShown ? 'Hide Notable Mentions' : 'Show Notable Mentions'
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(index) {
      this.goals.splice(index, 1)
    },
    toggleList() {
      this.isListShown = !this.isListShown
    }
  }
});

app.mount('#user-goals');