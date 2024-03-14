import {getGames, postGame} from './api_1.js'
document.addEventListener('DOMContentLoaded', ()=> {
    
    
        getGames();

        const gameBtn = document.getElementById('gameBtn');

        gameBtn.addEventListener('click', ()=> {
            const player_a = document.getElementById('recipient-name').value.trim()
            const player_b = document.getElementById('message-text').value.trim()            
            const score_game = document.getElementById('recipient-stage').value.trim()

            let game_date = document.getElementById('recipient-date').value

            game_date = new Date(Date.parse(game_date))
            game_date = game_date.toLocaleDateString()

            const shadow = document.getElementsByClassName('modal-backdrop')
            shadow[0].setAttribute('style', 'display:none')

            const modal = document.getElementById('exampleModal');
            modal.classList.remove('show')
            modal.setAttribute('style', 'display: none', )
            
            const alert = document.getElementById('alert')
            alert.setAttribute('style', 'display: block')

            const data = JSON.stringify({
                
                player_a: player_a,
                player_b: player_b,                
                score_game: score_game,
                game_date: game_date


            })
            postGame(data);
        })
        
    })
    
