const app = Vue.createApp({
  /** 
   * not a random name. it is called data - reserved name
   * it should return an object
   * anything returned can be used in vue conrolled elements
  */
  data() {
    return {
      courseGoalA: 'finish course',
      courseGoalB: 'master course',
      courseGoalC: '<h3>h3 master course</h3>',
      vueLink: 'https://vuejs.org/'
    }
  },
  /**
   * object of methods.
   * reserved name.
   * keys can be anything
   */
  methods: {
    outputGoal() {
      const randomNumber = Math.random()
      if (randomNumber < 0.5) {
        return this.courseGoalA
      } else {
        return this.courseGoalB
      }
    }
  }
})

app.mount('#user-goal')