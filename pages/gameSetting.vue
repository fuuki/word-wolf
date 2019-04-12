<template>
  <div>
    <div>
      ウルフの数
      <input
        v-model="wolfNum"
        type="number"
        min="1"
        :max="playerNum"
      >
      人/{{ playerNum }}人
    </div>
    <div>
      時間
      <input
        v-model="wolfNum"
        type="number"
        min="1"
        :max="10"
      >
      分
    </div>
    <button @click="next()">
      設定終了してワード確認へ
    </button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      playerNum: 3,
      wolfNum: 1
    }
  },
  methods: {
    next() {
      this.$router.push('/showWords')
    }
  }
}
</script>
