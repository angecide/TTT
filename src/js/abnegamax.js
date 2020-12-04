import { pos_to_lines } from './constants';

/**
 * implemenetaion of negamax with alpha beta pruning
 * @param {Array.<int>} board - representation of the 3x3 board 
 * @param {Array.<int>} score - tracks which lines on the board has been populated by which player 
 * @param {int} turn - keeps track of whose turn it is inside the algorithm
 * @param {int} alpha - keeps track of the value of the maximizing player's current best move
 * @param {int} beta - keeps track of the value of the minimizing player's current best move
 * @param {int} move - keeps track of the maximizing/minimizing player's current best move
 * @param {int} depth - keeps track of the depth of the search
 * @returns {int} - returns the optimial move for the AI to play
 */
export function abnegamax(board, score, turn, alpha, beta, move, depth = 10) {
    if (score.includes(-turn * 3)) {
        return -turn * depth;
    }
    let start = 0;
    while (true) {
        let empty_pos = board.indexOf("", start);
        if (empty_pos === -1) {
            if (start === 0) {
                return 0;
            }
            break;
        }
        board[empty_pos] = turn;
        for (const pos of pos_to_lines[empty_pos]) {
            score[pos] += turn;
        }
        const value = abnegamax(board, score, -turn, beta, alpha, empty_pos, depth - 1);
        [move, alpha] = turn * value > turn * alpha ? [empty_pos, value] : [move, alpha];
        board[empty_pos] = "";
        for (const pos of pos_to_lines[empty_pos]) {
            score[pos] -= turn;
        }
        if (turn * alpha >= turn * beta)
            break;
        start = empty_pos + 1;
    }
    return depth === 10 ? move : alpha;
}