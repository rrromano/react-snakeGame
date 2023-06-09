// Size for the board of snake game
const BOARD_SIZE: number = 25
// Position for the snake start
const SNAKE_POSITION_START: Array<Array<number>> = [
    [Math.round(BOARD_SIZE / 2), 1]
]
// Direction for the snake start
const SNAKE_DIRECTION_START: Array<number> = [0, 1]

interface directionsProps {
    ArrowUp: Array<number>
    ArrowDown: Array<number>
    ArrowLeft: Array<number>
    ArrowRight: Array<number>
}

// Object for change the snake direction
const DIRECTIONS: directionsProps = {
    ArrowLeft: [0, -1], // left
    ArrowUp: [-1, 0], // up
    ArrowRight: [0, 1], // right
    ArrowDown: [1, 0] // down
}
export { BOARD_SIZE, SNAKE_POSITION_START, SNAKE_DIRECTION_START, DIRECTIONS }
