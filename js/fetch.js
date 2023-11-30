(() => {
    console.log(GH_KEY);
})();

fetch('https://api.github.com/users/easi-d-hatchett/events/public', {headers: {'Authorization': 'TOKEN'+ GH_KEY}})

function getLastCommitDate(username, key) {
    fetch('https://api.github.com/users/easi-d-hatchett/events/public', {headers: {'Authorization': 'TOKEN'+ GH_KEY}})
        .then(response => response.json()).then(events => {
            for (let event of events) {
                if (event.type === "PushEvent") {
                    console.log(event);
                    console.log(event.created_at);
                    break;
                }
            }

    });
}



getGithubUsernames().then( users => {
    users.forEach( userObj => {
        // do something with each username
        console.log(userObj.login);
    });
}).catch(error => console.error(error));