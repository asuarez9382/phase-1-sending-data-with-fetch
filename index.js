// Add your code here
function renderId(userData) {
    let user = document.createElement("li")
    user.innerHTML = `
        <div class="content">
            <h4>${userData.name}</h4>
        </div>
    `
    console.log(userData.id)
    document.querySelector("content").appendChild(user)

}

function submitData(userName, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: email 
        })
    })
    .then(res => res.json())
    .then(data => document.body.innerHTML = data.id)
    .catch(error => document.body.innerHTML = error.message)
}

submitData("c", "c@gmail.com")
