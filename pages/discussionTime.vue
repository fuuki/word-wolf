<template>
  <div>
    <div>{{ remainSec | time }}</div>
    <button @click="decrease30sec()">
      -30秒
    </button>
    <button @click="increase30sec()">
      +30秒
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  filters: {
    time: val => {
      if (val < 0) {
        return '0:00'
      }
      const min = Math.floor(val / 60)
      const sec = `0${val % 60}`.slice(-2)
      return `${min}:${sec}`
    }
  },
  data: () => {
    return {
      remainSec: 180,
      timerInterval: null
    }
  },
  computed: {
    ...mapGetters('time', ['sec'])
  },
  created() {
    this.remainSec = this.sec
  },
  mounted() {
    this.timerInterval = setInterval(() => {
      this.countDown()
    }, 1000)
    this.timerOn = true
  },
  methods: {
    decrease30sec() {
      this.remainSec -= 30
    },
    increase30sec() {
      this.remainSec += 30
    },
    countDown() {
      if (this.remainSec < 0) {
        clearInterval(this.timerInterval)
        this.$router.push('/result')
        return
      }
      this.remainSec -= 1
    }
  }
}
</script>
