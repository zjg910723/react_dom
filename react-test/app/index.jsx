import React from "react";
import ReactDom from "react-dom";
import { Button } from 'antd';



class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext:!this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
    }

    render() {
        const status = "Next player:" + (this.state.xIsNext ? 'X' : 'O');

        return(
            <div>
                <div className="status">{status}</div>
                <div calss="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div calss="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div calss="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}


class Square extends React.Component {
    constructor(){
        super();
        
    }

    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        )
    }
}

class App extends React.Component {
    constructor (){
        super()
    };

    render(){
        return (
            <div>
                <Square />
                <Board />
            </div>
        )
    }
};

const app = document.createElement('div');
document.body.appendChild(app);
ReactDom.render(<App />,app);