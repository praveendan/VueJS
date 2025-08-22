const app = Vue.createApp({
  data() {
    return {
      boxAselected: false,
      boxBselected: false,
      boxCselected: false,
      boxDselected: false,
      boxEselected: false
    }
  },
  computed: {
    boxDClasses() {
      return { active: this.boxDselected }
    }
  },
  methods: {
    selectBox(box) {
      if (box === 'A') {
        this.boxAselected = !this.boxAselected
      } else if (box === 'B') {
        this.boxBselected = !this.boxBselected
      } else if (box === 'C') {
        this.boxCselected = !this.boxCselected
      } else if (box === 'D') {
        this.boxDselected = !this.boxDselected
      } else if (box === 'E') {
        this.boxEselected = !this.boxEselected
      }
    }
  }
})

app.mount('#styling');
