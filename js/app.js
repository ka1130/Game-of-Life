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
            if (state === "live") {
                this.getCellIndex(x, y).classList.add("live");
            } else {
                this.getCellIndex(x, y).classList.remove("live");
            }
        }

        GameOfLife.prototype.firstGlider = function() {
            this.setCellState(5, 2, "live");
            this.setCellState(6, 2, "live");
            this.setCellState(5, 1, "live");
            this.setCellState(5, 0, "live");
            this.setCellState(4, 0, "live");
        }

        GameOfLife.prototype.computeCellNextState = function(x, y) {
            let neighbours = [this.getCellIndex(x - 1, y - 1), this.getCellIndex(x, y - 1), this.getCellIndex(x + 1, y - 1), this.getCellIndex(x - 1, y), this.getCellIndex(x + 1, y), this.getCellIndex(x - 1, y + 1), this.getCellIndex(x, y + 1), this.getCellIndex(x + 1, y + 1)];
            console.log(neighbours);
            console.dir(this.getCellIndex(x, y));
            neighbours.forEach(function(item, index) {
                console.log(item.classList == true);
                return (item.classList !== "");
            });
        }

        GameOfLife.prototype.computeNextGeneration = function() {

        }

        GameOfLife.prototype.printNextGeneration = function() {

        }

        game.createBoard();
        // game.getCellIndex(5, 1);
        // game.setCellState(3, 4, "live");
        game.firstGlider();
        game.computeCellNextState(5, 1);




    });
})();