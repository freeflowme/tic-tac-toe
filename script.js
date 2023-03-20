const GameBoard = (() => {
    const board = [];

    const playX = document.querySelectorAll('.gameSquare');
        playX.forEach(gameSquare => {
            gameSquare.addEventListener('click', () => {
                const x = document.createElement('div');
                x.className = 'X';
                x.textContent = 'X';
                board.push(x.textContent);
                console.log(board);
                gameSquare.appendChild(x);
            })
        })

    const reset = document.querySelector('#resetBtn');
        resetBtn.addEventListener('click', () => {
            const clearBoard = document.querySelectorAll('.gameSquare');
                clearBoard.forEach(gameSquare => {
                    while (gameSquare.firstChild) {
                        gameSquare.firstChild.remove();
                    }
                })
                while (board.length > 0) {
                    board.shift();
                }
                console.log(board);
        })

})();

const Player = (name) => {
    return name;
};

