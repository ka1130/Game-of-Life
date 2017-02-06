(function() {
    document.addEventListener("DOMContentLoaded", function(event) {
        console.log("ok");

        function GameOfLife(boardWidth, boardHeight) {
            this.width = boardWidth;
            this.height = boardHeight;
        }

        const game = new GameOfLife(10, 10);
        console.log(game);

    });
})();