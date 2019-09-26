loadEventListeners();

function loadEventListeners(){
    document.addEventListener('DOMContentLoaded', getObject);
}

function getObject() {
    const gitHub=new Github;
    console.log(gitHub);

    gitHub.getUser('Nikoljka')
    .then (data=> {
        console.log(data);
    })
}