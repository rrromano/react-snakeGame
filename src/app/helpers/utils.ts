import { BOARD_SIZE } from './constants'

// Function for create the board matrix
export const createBoard = (): Array<Array<number>> => {
    const board = []
    for (let i = 1; i <= BOARD_SIZE; i++) {
        board.push([...Array(BOARD_SIZE + 1).keys()].slice(1))
    }
    return board
}

// Return random number from between min and max
export const randomIntFromRange = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
