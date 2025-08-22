const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      //fullName: ''
    };
  },
  // executed when dependency change (one dependency)
  // if you want to run some value that may be update
  // not used directly in template. behind the scene operations
  // can watch regular and computed properies both
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0
      }
    },
    fullName(value) {
      if (value === 'sam dam') alert('gotcha')
    }
    // whenever name data property changes this will re-execute
    // name(value) {
    //   this.fullName = value + ' ' + this.lastName
    // },
    // lastName(value) {
    //   this.fullName = this.name + ' ' + value
    // }
  },
  // computed properties. re calculated only when dependencies change
  // calculate output vals dynamically
  // kinda like useMemo
  // use with data binding
  computed: {
    fullName() {
      return this.name + ' ' + this.lastName
    }
  },
  // event binding or data binding
  methods: {
    // this will-re execute for every re-render
    // not the best for performance
    outputFullName() {
      if (this.name === '') return this.name
      return this.name + ' ' + 'Man'
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = ''
    }
  }
});

app.mount('#events');
