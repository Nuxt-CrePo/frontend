
const myApiUrl = 'https://api-kevlix.herokuapp.com/api/v1/experience/'
export default {
  getExperiences () {
    return fetch(myApiUrl)
      .then((response) => {
        return response.json()
      })
  },
  createExperience (name, description, image, year, duration) {
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
  deleteExperience (id) {
    return fetch(myApiUrl + id, {
    method: 'delete',
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  editExperience (id, name, description, image) {
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
  getExperience (id) {
    console.log(myApiUrl + id)
    return fetch(myApiUrl + id)
      .then((response) => {
        return response.json()
      })
  }
}
