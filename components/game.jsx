import React from 'react'
import Board from './board.jsx'
import * as Minesweeper from '../src/minesweeper'

class Game extends React.Component {
    constructor(props) {
        super(props)
        const board = new Minesweeper.Board(9,10)
        this.state = { board: board}
        this.updateGame = this.updateGame.bind(this)
        this.restartGame = this.restartGame.bind(this)
    }

    updateGame(tile, flagged) {
        if (flagged) {
            tile.toggleFlag()
        } else {
            tile.explore()
        }
        this.setState({board: this.state.board})
    }

    restartGame() {
        const board = new Minesweeper.Board(9,10)
        this.setState({board: board})
    }

    render() {
        let modal
        if (this.state.board.lost() || this.state.board.won()) {
            const text = this.state.board.won() ? "You won" : "You lost"
            modal =
                <div className='modal-screen'>
                    <div className='modal-content'>
                        <p>{text}</p>
                        <button onClick={this.restartGame}>Play Again?</button>
                    </div>
                </div>
        }

        return (
            <div>
                {modal}
                <h1>Minesweeper</h1>
                <p>Click to explore a tile.</p>
                <p>Alt + click to flag a tile.</p>
                <Board board={this.state.board} updateGame={this.updateGame} />
            </div>
        )
    }
}

export default Game