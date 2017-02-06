(function() {
    document.addEventListener("DOMContentLoaded", function(event) {

        function GameOfLife(boardWidth, boardHeight) {
            this.width = boardWidth;
            this.height = boardHeight;
            this.board = document.getElementById("board");

        }

        const game = new GameOfLife(10, 10);
        console.log(game);

        GameOfLife.prototype.createBoard() = function() {

        };


    });
})();