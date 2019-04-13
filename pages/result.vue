<template>
  <div>
    <div v-if="resultHidden">
      <button @click="show()">
        結果を見る
      </button>
    </div>
    <div v-else>
      <table>
        <tr>
          <th>名前</th>
          <th>役職</th>
          <th>ワード</th>
        </tr>
        <tr
          v-for="(player, index) in players"
          :key="index"
        >
          <td>{{ player.name }}</td>
          <td>{{ player.role | role }}</td>
          <td>{{ player.word }}</td>
        </tr>
      </table>
      <button @click="next()">
        トップに戻る
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const roleMap = {
  wolf: 'ウルフ',
  citizen: '市民'
}

export default {
  filters: {
    role: val => roleMap[val]
  },
  data: () => {
    return {
      resultHidden: true
    }
  },
  computed: {
    ...mapGetters('game', ['players'])
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

<style>
th,
td {
  border: solid;
}
</style>
