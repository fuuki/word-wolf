export const state = () => ({
  sec: 180
})

export const mutations = {
  setSec(state, sec) {
    state.sec = sec
  }
}

export const actions = {
  setSec({ commit }, sec) {
    commit('setSec', sec)
  }
}

export const getters = {
  sec: state => state.sec
}
