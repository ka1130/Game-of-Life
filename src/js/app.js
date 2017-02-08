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
                    if (event.shiftKey) {
                        this.classList.toggle("live");
                    }
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

        //Add various structures

        GameOfLife.prototype.firstGlider = function() {
            this.setCellState(4, 2, "live");
            this.setCellState(5, 2, "live");
            this.setCellState(6, 2, "live");
            this.setCellState(6, 1, "live");
            this.setCellState(5, 0, "live");
        }

        GameOfLife.prototype.lwss = function() {
            this.setCellState(10, 10, "live");
            this.setCellState(13, 10, "live");
            this.setCellState(14, 11, "live");
            this.setCellState(10, 12, "live");
            this.setCellState(14, 12, "live");
            this.setCellState(11, 13, "live");
            this.setCellState(12, 13, "live");
            this.setCellState(13, 13, "live");
            this.setCellState(14, 13, "live");
        }

        GameOfLife.prototype.smallExploder = function() {
            this.setCellState(14, 7, "live");
            this.setCellState(13, 8, "live");
            this.setCellState(14, 8, "live");
            this.setCellState(15, 8, "live");
            this.setCellState(13, 9, "live");
            this.setCellState(15, 9, "live");
            this.setCellState(14, 10, "live");
        }

        GameOfLife.prototype.pulsar = function() {
            this.setCellState(9, 8, "live");
            this.setCellState(11, 8, "live");
            this.setCellState(13, 8, "live");
            this.setCellState(9, 9, "live");
            this.setCellState(13, 9, "live");
            this.setCellState(9, 10, "live");
            this.setCellState(13, 10, "live");
            this.setCellState(9, 11, "live");
            this.setCellState(13, 11, "live");
            this.setCellState(9, 12, "live");
            this.setCellState(11, 12, "live");
            this.setCellState(13, 12, "live");
        }

        GameOfLife.prototype.pentadecathlon = function() {
            this.setCellState(12, 7, "live");
            this.setCellState(13, 7, "live");
            this.setCellState(14, 7, "live");
            this.setCellState(13, 8, "live");
            this.setCellState(13, 9, "live");
            this.setCellState(12, 10, "live");
            this.setCellState(13, 10, "live");
            this.setCellState(14, 10, "live");
            this.setCellState(12, 12, "live");
            this.setCellState(13, 12, "live");
            this.setCellState(14, 12, "live");
            this.setCellState(12, 13, "live");
            this.setCellState(13, 13, "live");
            this.setCellState(14, 13, "live");
            this.setCellState(12, 15, "live");
            this.setCellState(13, 15, "live");
            this.setCellState(14, 15, "live");
            this.setCellState(13, 16, "live");
            this.setCellState(13, 17, "live");
            this.setCellState(12, 18, "live");
            this.setCellState(13, 18, "live");
            this.setCellState(14, 18, "live");
        }

        GameOfLife.prototype.gosper = function() {
            this.setCellState(25, 9, "live");
            this.setCellState(23, 10, "live");
            this.setCellState(25, 10, "live");
            this.setCellState(13, 11, "live");
            this.setCellState(14, 11, "live");
            this.setCellState(21, 11, "live");
            this.setCellState(22, 11, "live");
            this.setCellState(35, 11, "live");
            this.setCellState(36, 11, "live");
            this.setCellState(12, 12, "live");
            this.setCellState(16, 12, "live");
            this.setCellState(21, 12, "live");
            this.setCellState(22, 12, "live");
            this.setCellState(35, 12, "live");
            this.setCellState(36, 12, "live");
            this.setCellState(1, 13, "live");
            this.setCellState(2, 13, "live");
            this.setCellState(11, 13, "live");
            this.setCellState(17, 13, "live");
            this.setCellState(21, 13, "live");
            this.setCellState(22, 13, "live");
            this.setCellState(1, 14, "live");
            this.setCellState(2, 14, "live");
            this.setCellState(11, 14, "live");
            this.setCellState(15, 14, "live");
            this.setCellState(17, 14, "live");
            this.setCellState(18, 14, "live");
            this.setCellState(23, 14, "live");
            this.setCellState(25, 14, "live");
            this.setCellState(11, 15, "live");
            this.setCellState(17, 15, "live");
            this.setCellState(25, 15, "live");
            this.setCellState(12, 16, "live");
            this.setCellState(16, 16, "live");
            this.setCellState(13, 17, "live");
            this.setCellState(14, 17, "live");
        }


        //end of structures

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

        GameOfLife.prototype.showAliveCoordinates = function() {
            let aliveList = [];

            for (let y = 0; y < this.height; y++) {
                for (let x = 0; x < this.width; x++) {
                    if (this.getCellIndex(x, y).classList.value === "live") {
                        aliveList.push({ x, y });
                    }
                }
            }
            console.log(aliveList);
        }

        const play = document.getElementById("play");
        const pause = document.getElementById("pause");

        function animateInterval() {
            game.computeNextGeneration();
            game.printNextGeneration();

        }

        let speedRate = 200;
        let intervalAnimation;

        function interval() {
            // game.showAliveCoordinates();
            window.setTimeout(animateInterval, speedRate);
            // intervalAnimation = setInterval(animateInterval, speedRate);
            pause.addEventListener("click", function(event) {
                //clearInterval(intervalAnimation);
            }, false);
        }

        let game;

        play.addEventListener("click", interval, false);

        function startGame() {
            const gameBoardWidth = 40;
            const gameBoardHeight = 40;
            game = new GameOfLife(gameBoardWidth, gameBoardHeight);
            game.createBoard();
            game.firstGlider();
        }

        startGame();

        // Get values from inputs

        const select = document.getElementById("select-structure");
        let selectedValue;

        function clearBoard() {
            for (const child of game.board.children) {
                child.classList.remove("live");
            }
        }

        const speed = document.getElementById("speed");

        speed.addEventListener("change", (event) => {
            console.log(event.target.value);
            speedRate = event.target.value * 100;
        });


        select.addEventListener("change", function(event) {
            selectedValue = select.value;

            switch (selectedValue) {
                case "glider":
                    clearBoard();
                    game.firstGlider();
                    break;
                case "lwss":
                    clearBoard();
                    game.lwss();
                    break;
                case "small-exploder":
                    clearBoard();
                    game.smallExploder();
                    break;
                case "pulsar":
                    clearBoard();
                    game.pulsar();
                    break;
                case "pentadecathlon":
                    clearBoard();
                    game.pentadecathlon();
                    break;
                case "gosper":
                    clearBoard();
                    game.gosper();
                    break;
                default:
                    clearBoard();
                    game.firstGlider();
            }


        }, false);




    });
})();