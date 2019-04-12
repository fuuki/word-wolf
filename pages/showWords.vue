<template>
  <div>
    <div>
      {{ showText(players[playerIndex], phase) }}
    </div>
    <button @click="next()">
      次へ
    </button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      playerIndex: 0,
      phase: 0,
      players: [
        { name: 'foo1', word: 'bar1' },
        { name: 'foo2', word: 'bar2' },
        { name: 'foo3', word: 'bar3' }
      ]
    }
  },
  methods: {
    showText: (player, phase) => {
      switch (phase) {
        case 0:
          return `${player.name}さんがこの画面を見てください`
        case 1:
          return 'ワードを表示します。よろしいですか？'
        default:
          return `ワードは「${player.word}」です`
      }
    },
    next() {
      if (this.phase <= 1) {
        this.phase += 1
        return
      }
      if (this.playerIndex + 1 < this.players.length) {
        this.phase = 0
        this.playerIndex += 1
        return
      }
      this.$router.push('/discussionTime')
    }
  }
}
</script>
