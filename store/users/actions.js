export const login = ({ commit }) => {

      commit('setUserData')
}

export const logout = ({ commit }) => {
  commit('clearUserData')
}

export const getUsers = async ({ commit, state }) => {
  try {
      const data = state.users
        commit('setProjectsGithub', data)
      }
      catch (error) {
          alert(error)
          console.log(error)
      }
  
}  