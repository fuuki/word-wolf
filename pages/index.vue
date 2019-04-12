<template>
  <div>
    <button @click="next()">
      ゲームを始める
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    next() {
      this.$router.push('/nameSetting')
    }
  }
}
</script>
