import wordsJSON from '~/data/words.json'

const shuffleArray = _arr => {
  const arr = _arr.slice()
  for (let i = arr.length - 1; i >= 0; i--) {
    // 0~iのランダムな数値を取得
    const rand = Math.floor(Math.random() * (i + 1))

    // 配列の数値を入れ替える
    ;[arr[i], arr[rand]] = [arr[rand], arr[i]]
  }
  return arr
}

export const state = () => ({
  names: [],
  roles: [],
  wordMap: {} // {role: 'word'}
})

export const mutations = {
  setNames(state, names) {
    state.names = names
  },
  setRoles(state, roles) {
    state.roles = roles
  },
  setWordMap(state, wordMap) {
    state.wordMap = wordMap
  }
}

export const actions = {
  init({ commit }, _names) {
    // デフォルト名を埋める
    const names = _names.map((v, i) => v || `プレイヤー${i + 1}`)
    commit('setNames', names)
  },
  decideRole({ commit, getters }, wolfNum) {
    const emptyRoles = Array(getters.playerNum).fill('')
    const nonShuffledRoles = emptyRoles.map(
      (_, i) => (i < wolfNum ? 'wolf' : 'citizen')
    )
    const roles = shuffleArray(nonShuffledRoles)
    commit('setRoles', roles)
  },
  decideWord({ commit }) {
    // 0~iのランダムな数値を取得
    const rand = Math.floor(Math.random() * (wordsJSON.list.length + 1))
    const list = shuffleArray(wordsJSON.list[rand])
    const [wolf, citizen] = list
    const wordMap = { wolf, citizen }
    commit('setWordMap', wordMap)
  }
}

export const getters = {
  playerNum: state => state.names.length,
  players: state =>
    state.names.map((name, i) => {
      const role = state.roles[i]
      const word = state.wordMap[role]
      return {
        name,
        role,
        word
      }
    })
}
