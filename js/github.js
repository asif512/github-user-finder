
class Github {
    constructor(){
        this.clientID = 'edd829ea1a9a20a5623e';
        this.clientSceret = '8c76cc7726b759e5fca59ee146996c72d8da6675';
    } 

    async getUsers(user){
        // Fetch Users
        const profileResponse = await fetch(`https://api.github.com/users/${user}?
        clientID=${this.clientID}&clientSecret=${this.clientSceret}`);

        // Fetch User Repos
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?
        &client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return{
            profile,
            repos
        }
    }
}