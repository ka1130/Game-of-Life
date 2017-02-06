(function() {
    document.addEventListener("DOMContentLoaded", function(event) {

        const GameOfLife = function(boardWidth, boardHeight) {
            this.width = boardWidth;
            this.height = boardHeight;
            this.board = document.getElementById("board");

        }

        const game = new GameOfLife(30, 30);
        console.log(game);

        GameOfLife.prototype.createBoard = function() {

            const divsCount = this.width * this.height;
            for (let i = 0; i < divsCount; i++) {
                this.board.appendChild(document.createElement("div"));
            }
        };

        game.createBoard();




    });
})();