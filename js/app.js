(function() {
    document.addEventListener("DOMContentLoaded", function(event) {

        const GameOfLife = function(boardWidth, boardHeight) {
            this.width = boardWidth;
            this.height = boardHeight;
            this.board = document.getElementById("board");

        }

        const game = new GameOfLife(10, 10);
        console.log(game);

        GameOfLife.prototype.createBoard = function() {
            const div = document.createElement("div");
            this.board.appendChild(div);
            this.width *= 10;
            this.height *= 10;
            console.log(this.width);
        };

        game.createBoard();




    });
})();