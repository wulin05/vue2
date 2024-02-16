export const hunhe1 = {
  methods: {
    showName() {
      alert(this.name)
    }
  },
  mounted() {
    console.log('我是mixin.js里的"你好呀~~~~~"')
  },
}

export const hunhe2 = {
  data() {
    return {
      x: 100,
      y: 200
    }
  },
}