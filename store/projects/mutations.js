import axios from 'axios'

export const setProjectsGithub = (state, projectsGithub) => {
    projectsGithub = []
    axios.get("https://api.github.com/users/KevlinS/repos")
    .then((response) => {
        projectsGithub = response.data;
        console.log(response);
      });
    
    state.projectsGithub = projectsGithub;
    console.log(projectsGithub)
}

export const increment = (state) => {
    state.counter++;
}