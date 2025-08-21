const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      anotherName: '',
      confirmedName: ''
    };
  },
  methods: {
    remove() {
      this.counter--
    },
    removeNum(num) {
      this.counter = this.counter - num
    },
    setName(event) {
      this.name = event.target.value
    },
    setAnotherName(event, lastName) {
      this.anotherName = event.target.value + ' ' + lastName
    },
    confirmInput(event) {
      this.confirmedName = this.anotherName
    }
  }
});

app.mount('#events');
