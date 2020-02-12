
// Init Github 
const github = new Github;
// Init UI
const ui = new UI;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) =>{
    
    const userName = e.target.value;

    if(userName !== ''){
        github.getUsers(userName)
        .then(user => {
            if(user.profile.message === 'Not Found'){
                // Show Alert
                ui.showMessage('User Not Found!!', 'alert alert-danger');
                ui.clearProfile();
            }
            else{
                // Show Profile
                ui.showProfile(user.profile);
                ui.showRepos(user.repos);
            }
        });
    }
    else{

        // Clear Profile
        ui.clearProfile();
    }

    e.preventDefault();
});