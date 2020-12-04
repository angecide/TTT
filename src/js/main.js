import React from 'react';
import { Board, ResetButtons } from './components';
import { pos_to_lines, lines_to_pos } from './constants';
import { abnegamax } from './abnegamax';

export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.reset = this.reset.bind(this);
        this.setState = this.setState.bind(this);
        this.state = this.reset("", "PICK A SIDE");
    }

    /**
     * updates the board when a valid move has been played
     * @param {int} pos - the position of the cell that needs to be updated 
     */
    update(pos) {
        this.board_array[pos] = this.turn === 1 ? "╳" : "◯";
        for (const idx of pos_to_lines[pos]) {
            this.score_array[idx] += this.turn;
        }
        this.win_line = this.score_array.indexOf(this.turn * 3);
        if (this.win_line > -1) {
            this.setState({ status: this.player === this.turn ? "YOU WIN" : "YOU LOSE" });
        } else if (!this.board_array.includes("")) {
            this.setState({ status: "THE GAME IS A DRAW" });
        } else {
            this.turn = -this.turn;
            this.setState({ status: "PLAY THE GAME" })
            if (this.ai === this.turn) {
                this.update(abnegamax(this.board_array, this.score_array,
                    this.turn, - this.ai * 20, this.ai * 20));
            }
        }
    }

    /**
     * resets the all the game's configurations
     * @param {int} player - the human player's side
     * @param {String} status - the status text
     */
    reset(player, status) {
        this.board_array = Array(9).fill("");
        this.score_array = Array(8).fill(0);
        this.player = player;
        this.ai = -player;
        this.turn = 1;
        this.win_line = -1;
        if (this.ai === this.turn) {
            this.update(abnegamax(this.board_array, this.score_array,
                this.turn, - this.ai * 20, this.ai * 20));
        }
        return {
            status: status
        }
    }

    render() {
        return (
            <div>
                <div className="header">{"Tic Tac Toe"}</div>
                <ResetButtons
                    setState={this.setState}
                    reset={this.reset}
                />
                <Board
                    onClick={this.update}
                    board={this.board_array}
                    status={this.state.status}
                    player={this.player}
                    win_line={this.win_line > -1 ? lines_to_pos[this.win_line] : []}
                    turn={this.turn}
                />
                <div className="status"> {this.state.status}</div>
            </div>
        );
    }
}
