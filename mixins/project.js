export default {
    
    methods: {
        addToWishlistsRepo(repo, i) {
            let projectBD = JSON.parse(localStorage.getItem('wishlists')) || [];
            let projectObject = {
                id: repo.id,
                name: repo.name,
                description: repo.description,
                img: repo.homepage,
                language: repo.language,
                year: repo.created_at,
                html_url: repo.html_url
            }

            let indexOfExistingProject = projectBD.findIndex(
                (el) => el.id === projectObject.id
            );
            if(indexOfExistingProject !== -1) {
                this.$alert("This project is already on your list","","warning")
                // alert('warning')
            }
            else {
                projectBD.push(projectObject)
                // alert('success')
                this.$alert(
                    "",
                    "Success",
                    "success"
                  ).then(() => console.log("Closed"));
                console.log("success")
            }

            localStorage.setItem('wishlists', JSON.stringify(projectBD));
        },
        addToWishlists() {
            let projectBD = JSON.parse(localStorage.getItem('wishlists')) || [];
            let projectObject = {
                id: this.project.id,
                name: this.project.name,
                description: this.project.description,
                img: this.project.homepage,
                language: this.project.language,
                year: this.project_year,
                html_url: this.project.html_url
            }

            let indexOfExistingProject = projectBD.findIndex(
                (el) => el.id === projectObject.id
            );
            if(indexOfExistingProject !== -1) {
                this.$alert("This project is already on your list","","warning")
                // alert('warning')
            }
            else {
                projectBD.push(projectObject)
                // alert('success')
                this.$alert(
                    "",
                    "Success",
                    "success"
                  ).then(() => console.log("Closed"));
                console.log("success")
            }

            localStorage.setItem('wishlists', JSON.stringify(projectBD));
        },
        getProjectWishlists() {
            let projectBD = JSON.parse(localStorage.getItem('wishlists'));
            return projectBD;
        },
        clearWishlists() {
            localStorage.removeItem('wishlists');
        },
        removeProject(project) {
            let projectDB = JSON.parse(localStorage.getItem('wishlists'))
            let indexOfExistingProject = projectDB.findIndex(
                (el) => el.id === project.id
            )

            if(projectDB.length > 1) {
                projectDB.splice(indexOfExistingProject, 1)
                location.reload();
                console.log("sup")
            }
            else {
                projectDB = []
                location.reload();
            }
            localStorage.setItem('wishlists', JSON.stringify(projectDB));
        }
    }
}