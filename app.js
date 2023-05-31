Vue.createApp({
  // data() {
  //   return {}
  // }
  data: () => ({
    title: 'Я есть Грут',
    person: {
      firstName: 'Natalya',
      lastName: 'Lysak',
      age: 25
    },
    items: [1, 2]
  }),
  methods: {
    addItem() {
      this.items.unshift(this.$refs.myInput.value);
      this.$refs.myInput.value = '';
      // console.log(this.$refs.myInput.value);
    },
    remove(i) {
      this.items.splice(i, 1);
    },
    log(item) {
      console.log(item);
    }
  },
  computed: {
    evenItems() {
      return this.items.filter(i => i % 2 === 0)
    }
  }
}).mount('#app');