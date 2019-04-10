<template>
  <div>
    <button @click="next()">
      next
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    next() {
      this.$router.push('/result')
    }
  }
}
</script>
