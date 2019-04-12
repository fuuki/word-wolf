<template>
  <div>
    <div
      v-for="(player, index) in players"
      :key="index"
    >
      <input
        v-model="player.name"
        :placeholder="`プレイヤー${index}`"
      >
      <button
        v-if="players.length > 3"
        @click="removePlayer(index)"
      >
        x
      </button>
    </div>
    <button @click="addPlayer()">
      +
    </button>
    <button @click="next()">
      ゲーム設定へ
    </button>
  </div>
</template>

<script>
class PlayerForm {
  constructor() {
    this.name = ''
  }
}

export default {
  data: () => {
    const players = [1, 2, 3]
    players.map(_ => new PlayerForm())
    return {
      players
    }
  },
  methods: {
    addPlayer() {
      this.players.push(new PlayerForm())
    },
    removePlayer(index) {
      if (this.players.length > 3) {
        this.players.splice(index, 1)
      }
    },
    next() {
      this.$router.push('/gameSetting')
    }
  }
}
</script>
