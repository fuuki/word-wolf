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
        v-model="gameMin"
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
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => {
    return {
      wolfNum: 1,
      gameMin: 3
    }
  },
  computed: {
    ...mapGetters('game', ['playerNum'])
  },
  methods: {
    ...mapActions('game', ['decideRole', 'decideWord']),
    ...mapActions('time', ['setSec']),
    next() {
      this.decideRole(this.wolfNum)
      this.decideWord()
      this.setSec(this.gameMin * 60)
      this.$router.push('/showWords')
    }
  }
}
</script>
