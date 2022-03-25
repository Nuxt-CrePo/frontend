export const setUserData = (state, user) => {
    state.users.push(user)
    localStorage.setItem('user', JSON.stringify(state.user))
}

export const clearUserData = () => {
    localStorage.removeItem('user')
    location.reload()
}
export const setUsers = (state, users) => {
    state.users = users;
    console.log(users)
}


// setLocalUser(user) {
//     this.resultats.push(user)
//     localStorage.setItem("resultat", JSON.stringify(this.resultats));
//   }