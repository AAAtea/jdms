const state = {
  /**
   * 系统配置
   * @property delay 网络延迟
   */
  config: {
    delay: 0
  }
}

const getters = {
  config: (state) => state.config
}

const mutations = {
  SAVE_CONFIG(state, params) {
    state.config = { ...params }
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
