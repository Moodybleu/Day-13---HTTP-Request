const btn = document.getElementById("btn");
btn.addEventListener("click", getusers);

function getUsers(e) {
    e.preventDefault();

    fetch("users.json")
        .then(function(response) {
            return response.json
        })
}