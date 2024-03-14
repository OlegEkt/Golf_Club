
export function createGames(games){
    const main = document.getElementById('main')
    const container = document.createElement('div');
    container.setAttribute('class', 'justify-content-start flex-wrap pt-3')
    
    container.setAttribute('id', 'games')

    container.classList.add('d-flex');

    for (const i_game of games){
        const gameContainer = document.createElement('div');
        gameContainer.classList.add('card')
        gameContainer.classList.add('mb-3')
        gameContainer.classList.add('mx-2')
        gameContainer.classList.add('mt-2')   
        
        

        const body = document.createElement('div');
        body.classList.add('card-body')
        
        const gameTitleA = document.createElement('h6');
        gameTitleA.textContent = 'Имя игрока: ' + i_game.player_a;
        gameTitleA.setAttribute('class','card-subtitle mb-2 text-muted')
        
        const gameTitleB = document.createElement('h6')
        gameTitleB.textContent = 'Имя игрока: ' + i_game.player_b;
        gameTitleB.setAttribute('class','card-subtitle mb-2 text-muted');
        
        const gameScore = document.createElement('h6')
        gameScore.textContent = `Счет в игре: ${i_game.score_game}`;
        gameScore.setAttribute('class','card-subtitle mb-2 text-muted'); 

        const gameDate = document.createElement('h6')
        gameDate.textContent = 'Дата проведения игры: ' + i_game.game_date;
        gameDate.setAttribute('class','card-subtitle mb-2 text-muted');

        body.append(gameTitleA, gameTitleB, gameScore, gameDate)

        gameContainer.append(body)

        container.append(gameContainer)

    }

    main.append(container)
}