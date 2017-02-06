(function() {
    document.addEventListener("DOMContentLoaded", function(event) {

        const GameOfLife = function(boardWidth, boardHeight) {
            this.width = boardWidth;
            this.height = boardHeight;
            this.board = document.getElementById("board");
            this.cells = [];
        }

        const game = new GameOfLife(30, 30);

        GameOfLife.prototype.createBoard = function() {
            this.board.style.width = this.width * 10 + "px";
            this.board.style.height = this.height * 10 + "px";
            const divsCount = this.width * this.height;
            for (let i = 0; i < divsCount; i++) {
                this.board.appendChild(document.createElement("div"));
            }
            this.cells = this.board.getElementsByTagName("div");
            for (let i = 0; i < this.cells.length; i++) {
                this.cells[i].addEventListener("click", function(event) {
                    this.classList.toggle("live");
                });
            }

        };

        GameOfLife.prototype.getCellIndex = function(x, y) {
            let index = x + y * this.width;
            return this.cells[index];
        }

        GameOfLife.prototype.setCellState = function(x, y, state) {
            if (state === true) {
                console.log(this.getCellIndex(x, y));
            }
        }

        game.createBoard();
        game.getCellIndex(5, 1);
        game.setCellState(3, 4, true);




    });
})();