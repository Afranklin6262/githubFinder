class Github {
    constructor() {
        this.client_id = '13a179e7fdcf641a7404';
        this.client_secret = '7d689560e7c9fb8a2f5a02fc434f7646320a98ab';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos? per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        
        return {
            profile,
            repos
        }  
    }
 

}