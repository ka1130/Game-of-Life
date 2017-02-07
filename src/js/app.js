(function() {
    document.addEventListener("DOMContentLoaded", function(event) {

        Array.prototype.count = function() {
            return this.length;
        };

        let self;
        const GameOfLife = function(boardWidth, boardHeight) {
            this.width = boardWidth;
            this.height = boardHeight;
            this.board = document.getElementById("board");
            this.cells = [];
            this.states = [];
            self = this;
        }

        GameOfLife.prototype.createBoard = function() {
            this.board.style.width = this.width * 10 + "px";
            this.board.style.height = this.height * 10 + "px";
            const divsCount = this.width * this.height;
            for (let i = 0; i < divsCount; i++) {
                this.board.appendChild(document.createElement("div"));
            }
            this.cells = this.board.getElementsByTagName("div");
            for (let i = 0; i < this.cells.length; i++) {
                this.cells[i].addEventListener("mouseover", function(event) {
                    this.classList.toggle("live");
                });
            }
        };

        GameOfLife.prototype.getCellIndex = function(x, y) {
            if (x >= 0 && y >= 0 && x < this.width && y < this.height) {
                let index = x + y * this.width;
                return this.cells[index];
            }
            return undefined;
        }

        GameOfLife.prototype.setCellState = function(x, y, state) {
            if (state === "live") {
                this.getCellIndex(x, y).classList.add("live");
            } else {
                this.getCellIndex(x, y).classList.remove("live");
            }
        }

        GameOfLife.prototype.firstGlider = function() {
            this.setCellState(4, 2, "live");
            this.setCellState(5, 2, "live");
            this.setCellState(6, 2, "live");
            this.setCellState(6, 1, "live");
            this.setCellState(5, 0, "live");
        }

        GameOfLife.prototype.computeCellNextState = function(x, y) {
            let neighbours = [this.getCellIndex(x - 1, y - 1), this.getCellIndex(x, y - 1), this.getCellIndex(x + 1, y - 1), this.getCellIndex(x - 1, y), this.getCellIndex(x + 1, y), this.getCellIndex(x - 1, y + 1), this.getCellIndex(x, y + 1), this.getCellIndex(x + 1, y + 1)];

            let neighboursAlive = [];
            for (neighbour of neighbours) {
                if (typeof neighbour === "undefined" || neighbour.classList.value == "") {
                    continue;
                } else {
                    neighboursAlive.push(neighbour);
                }
            }

            let thisAlive;

            if (x >= 0 && y >= 0) {
                thisAlive = this.getCellIndex(x, y).classList.value === "live";
            }

            let livingCount = neighboursAlive.count();

            if (livingCount < 2) {
                return 0;
            } else if ((livingCount === 2 && thisAlive === true) || (livingCount === 3 && thisAlive === true) || (livingCount === 3 && thisAlive === false)) {
                return 1;
            } else if (livingCount > 3) {
                return 0;
            } else {
                return 0;
            }
        }

        GameOfLife.prototype.computeNextGeneration = function() {
            this.states = [];
            for (let i = 0; i < this.height; i++) {
                for (let j = 0; j < this.width; j++) {
                    this.states.push(this.computeCellNextState(j, i));
                }
            }
            return this.states;
        }

        GameOfLife.prototype.printNextGeneration = function() {
            for (let i = 0; i < this.states.length; i++) {
                if (this.states[i] === 1 && this.cells[i] != undefined) {
                    this.cells[i].classList.add("live");
                } else if (this.states[i] === 0 && this.cells[i] != undefined) {
                    this.cells[i].classList.remove("live");
                }
            }
        }

        const play = document.getElementById("play");
        const pause = document.getElementById("pause");

        function animateInterval() {
            game.computeNextGeneration();
            game.printNextGeneration();
        }

        function interval() {
            setInterval(animateInterval, 200);
        }

        let game;

        play.addEventListener("click", interval, false);
        pause.addEventListener("click", function(event) {
            clearInterval(interval);
        }, false);

        function startGame() {
            // const gameBoardWidth = prompt("Enter the board's width");
            // const gameBoardHeight = prompt("Enter the board's height");
            const gameBoardWidth = 30;
            const gameBoardHeight = 30;
            game = new GameOfLife(gameBoardWidth, gameBoardHeight);
            game.createBoard();
            game.firstGlider();
        }

        startGame();


    });
})();