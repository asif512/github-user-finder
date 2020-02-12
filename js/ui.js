class UI {
    constructor(){
        this.profile = document.getElementById('display');
    }

     // Show Profile
    showProfile(user){
        this.profile.innerHTML = `
            <div class ="row mt-5">
                <div class="col-md-3" > 
                    <img class="img-fluid rounded-circle" src="${user.avatar_url}">
                    <a href="${user.html_url}" class ="btn btn-primary btn-block my-3" target="_blank"> View Profile </a>
                </div>
                <div class="col-md-9" > 
                    <button type="button" class="btn btn-info my-2">
                        Public Repo: <span class="badge badge-light">${user.public_repos}</span>
                    </button>
                    <button type="button" class="btn btn-info my-2">
                        Public Gists: <span class="badge badge-light">${user.public_gists}</span>
                    </button>
                    <button type="button" class="btn btn-info my-2">
                        Public Followers: <span class="badge badge-light">${user.followers}</span>
                    </button>
                    <button type="button" class="btn btn-info my-2">
                        Public Following: <span class="badge badge-light">${user.following}</span>
                    </button>
                    <br><br>
                    <ul>
                        <li class="list-group-item">Company: ${user.company} </li>
                        <li class="list-group-item">Website/Blog: ${user.blog} </li>
                        <li class="list-group-item">Location: ${user.location} </li>
                        <li class="list-group-item">Member Since: ${user.created_at} </li>
                    </ul>
                </div>
            </div>
            <div class="row mt-3"> 
                <div class="col-md-12">
                    <h2 class="lead w-100"> User Repositories </h2>
                    <div class="w-100" id="repos"></div>
                </div>    
            </div>      
        `;
    }

    // Show Repos
    showRepos(repos){
        let output = '';
        repos.forEach(function(repo){
            output += `
                <ul class="list-group">
                    <li class="list-group-item justify-content-between align-items-center">
                       <a href="${repo.html_url} target="_blank">
                            <span>${repo.name}</span>
                        </a>
                        <div class="d-inline-block float-right">
                            <button type="button" class="btn btn-success">
                                Stars <span class="badge badge-light">${repo.stargazers_count}</span>
                            </button>
                            <button type="button" class="btn btn-info">
                                Watchers <span class="badge badge-light">${repo.watchers_count}</span>
                            </button>
                            <button type="button" class="btn btn-primary">
                                Forks <span class="badge badge-light">${repo.forks_count}</span>
                            </button>
                        </div>
                    </li>
                </ul>
            `;
        })
        
        document.getElementById('repos').innerHTML = output;
    }

    // Show Message
    showMessage(message, className){
        this.clearMessage();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const card = document.querySelector('.card');
        const title = document.querySelector('.title');
        card.insertBefore(div, title);

        // SetTimout 
        setTimeout(() => {
            this.clearMessage();
        }, 3000);

    }

    // Clear Message
    clearMessage(){
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }

    // Clear Profile
    clearProfile(){
        this.profile.innerHTML = '';
    }
}