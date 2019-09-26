class Github {
    constructor() {
        this.client_id='f7f5341cc6f569070681';
        this.client_secret='6eef5e2671f0f2f59ac2c30ad0364b21c4e5e812';
        this.repos_count= 5;
        this.repos_sort='created: asc';
    }
    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?cliend_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_cpunt}$sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret} `);
        const profile=await profileResponse.json();
        const repos= await repoResponse.json();


        return{
            profiole, repos
        }

    }

}