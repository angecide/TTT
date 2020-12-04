/**
 * creates the on-screen board of the game, as well as handles the logic
 * of when to disable/enable each board cell etc.
 * @param {Object} props - Object
 * @param {Array.<int>} props.board - 3x3 board
 * @param {String} props.status - status text 
 * @param {int} props.player - human player's side
 * @param {Array.<int>} props.win_line - contains the positions of the winning line
 * @param {function} props.onClick - onClick function from main, when pressing a board cell
 * @returns {div} - div containing the on-screen 3x3 board
 */
export function Board(props) {
    return (
        [0, 3, 6].map((pos) =>
            <div key={pos} className='board'>
                {
                    [0, 1, 2].map((i) =>
                        <button
                            key={i + pos}
                            className={"square"}
                            disabled={
                                props.board[i + pos] !== "" ||
                                props.status.includes("YOU") ||
                                props.player === ""
                            }
                            value={props.win_line.includes(i + pos) ? "win" + String(props.turn) : ""}
                            onClick={() => props.onClick(i + pos)}>
                            {props.board[i + pos]}
                        </button>
                    )
                }
            </div>
        )
    );
}

/**
 * creates the on-screen three buttons above the board that resets the game
 * as well as resets the board and sets the player's and AI's side
 * @param {Object} props - Object
 * @param {function} props.setState - setState from main, updates the status text and rerenders
 * @param {functon} props.reset - reset from main, resets all the game's configuration
 * @returns {div} - div containing the three actionable buttons
 */
export function ResetButtons(props) {
    return (
        <div className="actions">
            {
                ["╳", "◯"].map((val, idx) =>
                    <button
                        key={idx}
                        className="reset"
                        onClick={() => props.setState(
                            props.reset(1 - 2 * idx, "PLAY THE GAME")
                        )}
                        value={val}>
                        {val}
                    </button>
                )
            }
            <button
                className="reset"
                onClick={() => props.setState(props.reset("", "PICK A SIDE"))}>
                {"CLEAR"}
            </button>
        </div>
    )
}