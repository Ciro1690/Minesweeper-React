import React from 'react'
import Tile from './tile.jsx'

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.renderRows = this.renderRows.bind(this)
        this.renderTiles = this.renderTiles.bind(this)
    }

    renderRows() {
        const board = this.props.board
        return board.grid.map((row,i) => {
            return(
                <div className='row' key={`row-${i}`}>
                    {this.renderTiles(row, i)}
                </div>
            )
        })
    }

    renderTiles(row, i) {
        const board = this.props.board
        return row.map((tile,j) => {
            return(
                <Tile
                  tile={tile}
                  updateGame={this.props.updateGame}
                  key={i * board.gridSize + j} />
            )
        })
    }

    render() {
        const board = this.props.board
        return (
            <div>
                {this.renderRows()}
            </div>
        )
    }
}

export default Board