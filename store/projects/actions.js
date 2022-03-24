import axios from "axios";

export const getGithubProjects = async ({ commit }) => {
    await axios.get("https://api.github.com/users/KevlinS/repos")
    .then(response => {
        commit('setProjectsGithub', response.data)
        console.log(response)
    })
    
}  