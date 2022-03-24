import axios from "axios";

export const getGithubProjects = async ({ commit }) => {
    try {
        const data = await axios.get('https://api.github.com/users/KevlinS/repos')
          commit('setProjectsGithub', data.data)
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
    
}  