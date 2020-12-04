/**
 * maps positions on board to the lines that contain the board position
 * i.e. 1 (second position) -> (1,3) (second column, first row)
 */
export const pos_to_lines = {
    0: [0, 3, 6], 1: [1, 3], 2: [2, 3, 7],
    3: [0, 4], 4: [1, 4, 6, 7], 5: [2, 4],
    6: [0, 5, 7], 7: [1, 5], 8: [2, 5, 6]
}

/**
 * maps lines to the board positions that are contained on the line
 * i.e. 1 (second column) -> (1,4,7) (the board positions on the second column)
 */
export const lines_to_pos = {
    0: [0, 3, 6], 1: [1, 4, 7], 2: [2, 5, 8],
    3: [0, 1, 2], 4: [3, 4, 5], 5: [6, 7, 8],
    6: [0, 4, 8], 7: [2, 4, 6]
}