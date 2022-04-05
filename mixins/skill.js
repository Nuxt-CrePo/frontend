
const myApiUrl = 'https://api-kevlix.herokuapp.com/api/v1/skill/'
export default {
  getSkills () {
    return fetch(myApiUrl)
      .then((response) => {
        return response.json()
      })
  },
  createSkill (name, description, image) {
    return fetch(myApiUrl, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          'name': name,
          'description': description,
          'image': image,
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  deleteSkill (id) {
    return fetch(myApiUrl + id, {
    method: 'delete',
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  editSkill (id, name, description, image) {
    return fetch(myApiUrl + id, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          'name': name,
          'description': description,
          'image': image,
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  getSkill (id) {
    console.log(myApiUrl + id)
    return fetch(myApiUrl + id)
      .then((response) => {
        return response.json()
      })
  }
}
