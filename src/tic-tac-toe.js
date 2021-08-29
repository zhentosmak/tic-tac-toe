class TicTacToe {

    constructor() {
        this.currentPlayer = 'x',
            this.gameField = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ],
            this.playerX = [];
        this.playerO = [];
        this.winComb = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ]
        this.winner = null;
        this.counter = 0
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer
    }

    nextTurn(rowIndex, columnIndex) {

        if (this.isFinished()) {
            return this.isFinished() ? true : false
        }
        if ((this.gameField[rowIndex][columnIndex] != 'x' || this.gameField[rowIndex][columnIndex] != 'o') && rowIndex <= 2 && columnIndex <= 2) {
            if (this.currentPlayer === 'x') {
                if (this.gameField[rowIndex][columnIndex] != 'x' && this.gameField[rowIndex][columnIndex] != 'o') {
                    this.counter++
                    this.playerX.push(this.gameField[rowIndex][columnIndex])
                    this.currentPlayer = 'o'
                    this.gameField[rowIndex][columnIndex] = 'x'
                }
            } else if (this.currentPlayer === 'o') {
                if (this.gameField[rowIndex][columnIndex] != 'x' && this.gameField[rowIndex][columnIndex] != 'o') {
                    this.counter++
                    this.playerO.push(this.gameField[rowIndex][columnIndex])
                    this.currentPlayer = 'x'
                    this.gameField[rowIndex][columnIndex] = 'o'
                }

            }
        } else return this.nextTurn(rowIndex, columnIndex)
    }

    isFinished() {
        return this.counter >= 9 || this.getWinner() ? true : false
    }

    getWinner() {
        let counter = 0;
        for (let value of this.winComb) {
            counter = 0
            for (let i of value) {
                if (this.playerX.includes(i)) {
                    counter++
                    if (counter === 3) {
                        this.winner = true
                        return 'x'
                    }
                }

            }

            counter = 0

            for (let value of this.winComb) {
                counter = 0
                for (let i of value) {
                    if (this.playerO.includes(i)) {
                        counter++
                        if (counter === 3) {
                            this.winner = true
                            return 'o'
                        }
                    }


                }
            }
        }
        return this.winner
    }

    noMoreTurns() {
        return this.counter >= 9 ? true : false
    }

    isDraw() {
        if (this.counter < 9 || this.winner) {
            return false
        } else if (!this.getWinner() && this.isFinished() && this.noMoreTurns()) {
            return true
        } else return false
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.gameField[rowIndex][colIndex] === 'x') {
            return 'x'
        } else if (this.gameField[rowIndex][colIndex] === 'o') {
            return 'o'
        } else return null

    }
}



module.exports = TicTacToe;