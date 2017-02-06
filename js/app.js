(function() {
    document.addEventListener("DOMContentLoaded", function(event) {

        const GameOfLife = function(boardWidth, boardHeight) {
            this.width = boardWidth;
            this.height = boardHeight;
            this.board = document.getElementById("board");
            this.cells = [];
        }

        const game = new GameOfLife(30, 30);
        console.log(game);

        GameOfLife.prototype.createBoard = function() {
            this.board.style.width = this.width * 10 + "px";
            this.board.style.height = this.height * 10 + "px";
            const divsCount = this.width * this.height;
            for (let i = 0; i < divsCount; i++) {
                this.board.appendChild(document.createElement("div"));
            }
            const cells = this.board.getElementsByTagName("div");
        };

        game.createBoard();




    });
})();