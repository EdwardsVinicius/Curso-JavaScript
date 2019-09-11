//3.1
// Funão delay aciona o .then após 1s
/*
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
function umPorSegundo() {
    delay().then(() => {
        console.log('1s');
        delay().then(() => {
            console.log('2s');
            delay().then(() => {
                console.log('3s');
            });
        })
    });
}
umPorSegundo();
*/

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
const umPorSegundo = async() => {
    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');
};

umPorSegundo();

//3.2
/*---------------------------------------------------------------------*/
/*
import axios from 'axios';
function getUserFromGithub(user) {
 axios.get(`https://api.github.com/users/${user}`)
 .then(response => {
 console.log(response.data);
 })
 .catch(err => {
 console.log('Usuário não existe');
 })
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');
*/

import axios from 'axios';

const getUserFromGithub = async(user) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);

        console.log(response.data);
    } catch (error) {
        console.log('Usuário não existe');
    }

};

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

//3.3
/*-----------------------------------------------------------------------*/
/*
class Github {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Repositório não existe');
        })
    }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');
*/

class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch (error) {
            console.log('Repositório não existe');
        }
    }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

//3.4
/*----------------------------------------------------------------------------*/
/*
const buscaUsuario = usuario => {
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
    console.log(response.data);
    })
    .catch(err => {
    console.log('Usuário não existe');
    });
   }
   buscaUsuario('diego3g');
*/

const buscaUsuario = async(usuario) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    } catch (error) {
        console.log('Usuário não existe');
    }
}

buscaUsuario('diego3g');