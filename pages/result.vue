<template>
  <div>
    <div v-if="resultHidden">
      <button @click="show()">
        結果を見る
      </button>
    </div>
    <div v-else>
      結果
      <ul>
        <li
          v-for="(player, index) in players"
          :key="index"
        >
          {{ player.name }}:{{ player.role }}
        </li>
      </ul>
      <button @click="next()">
        トップに戻る
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      resultHidden: true,
      players: [
        { name: 'foo1', role: 'bar1' },
        { name: 'foo2', role: 'bar2' },
        { name: 'foo3', role: 'bar3' }
      ]
    }
  },
  methods: {
    show() {
      this.resultHidden = false
    },
    next() {
      this.$router.push('/')
    }
  }
}
</script>
