
import {createGames} from './createDOM_1.js';

export async function getUser(user_id){
    const spinner = document.getElementById('spinner')
    spinner.setAttribute('style','display: block')

    const response = await fetch(`http://127.0.0.1:8001/game_users/${user_id}/`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const result = await response.json();
    spinner.setAttribute('style', 'display: none')
    createUser(result)
}

export async function getGame(game_id){                    
    const spinner = document.getElementById('spinner')
    spinner.setAttribute('style','display: block')

    const response = await fetch(`http://127.0.0.1:8001/games/${game_id}/`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const result = await response.json();

    spinner.setAttribute('style', 'display: none')
   

    console.log(result)
}

export async function getGames(){
    const spinner = document.getElementById('spinner')
    spinner.setAttribute('style','display: block')
    const response = await fetch('http://127.0.0.1:8001/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }

    })
    const data = await response.json();
    createGames(data)  
    
    spinner.setAttribute('style', 'display: none') 
}

export async function postGame(data){
    const response = await fetch('http://127.0.0.1:8001/', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: data
    })
    const result = await response.json();
    const alert = document.getElementById('alert')
    
    if (response.status == 400){
       alert.classList.remove('alert-secondary')
       alert.classList.add('alert-danger')
       alert.innerHTML = ""
       alert.textContent = 'Неверные данные'
    }else if (response.status == 201){
       alert.classList.remove('alert-secondary')
       alert.classList.add('alert-success')
       alert.innerHTML = ""
       alert.textContent = 'Результат игры добавлен'
    }

    setTimeout(()=> {
        alert.setAttribute('style', 'display: none')
    }, 2000)

    setTimeout(()=>{
        location.reload()
    }, 2000)
    
    const container = document.getElementById('games')
    container.innerHTML = ""
     
    

    console.log(result);
}




