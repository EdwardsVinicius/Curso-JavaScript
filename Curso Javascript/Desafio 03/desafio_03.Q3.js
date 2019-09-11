
function renderRepos(){
    listElement.innerHTML = '';

    for(i of repos){
        var repoElement = document.createElement('li');
        var repoText = document.createTextNode(i);

        repoElement.appendChild(repoText);
        listElement.appendChild(repoElement);

    }
}

function addRepo(){
    var repo = inputElement.value;
    var link = 'https://api.github.com/users/'+repo+'/repos';

    repos.push('Carregando...');
    renderRepos();
    axios.get(link)
    .then(function(){
        repos.pop();
        repos.push(link);
    })
    .catch(function(error){
        repos.splice(repos.indexOf('Carregando...'), 1);
        alert(error);
        console.warn(error);
    })
    .finally(function(){
        renderRepos();
    });
    

    inputElement.value = '';
    //renderRepos();
    //saveToStorage();
}

// function saveToStorage(){
//     localStorage.setItem("list_repos", JSON.stringify(repos));
// }

var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var listElement = document.createElement('ul');
var containerElement = document.querySelector('#app');

containerElement.appendChild(listElement);

repos = [];

renderRepos();