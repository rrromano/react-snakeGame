import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../state/store'

import { CellContainer } from './style'

const Cell: FC<{
    row: number
    cell: number
    snake: Array<Array<number>>
    apple: Array<number>
}> = ({ row, cell, snake, apple }) => {
    // CustomSwitch props reducer
    const theme = useSelector((state: RootState) => state.customSwitch.theme)

    // I check if the snake is present in cell
    const snakePresentInCell = (row: number, cell: number): boolean => {
        return snake.some((x) => x[0] === row && x[1] === cell)
    }

    // I check if the snake head is present in cell
    const snakeHeadPresentInCell = (row: number, cell: number): boolean => {
        return snake[0][0] === row && snake[0][1] === cell
    }

    // I check if the apple is present in cell
    const applePresentInCell = (row: number, cell: number): boolean => {
        return apple[0] === row && apple[1] === cell
    }

    // Define the background color of the cell
    const defineColorCell = (row: number, cell: number): string => {
        let color = theme === 'dark' ? 'black' : 'white'
        if (snakePresentInCell(row, cell)) color = 'green'
        if (snakeHeadPresentInCell(row, cell)) {
            color = theme === 'dark' ? 'lightgrey' : 'darkslategrey'
        }
        if (applePresentInCell(row, cell)) color = 'red'
        return color
    }

    // Define the border style of the cell
    const defineBorderCell = (row: number, cell: number): string => {
        let color = ''
        if (snakePresentInCell(row, cell) || applePresentInCell(row, cell))
            color = theme === 'dark' ? '1px solid black' : '1px solid white'
        return color
    }

    return (
        <CellContainer
            cell={cell}
            color={defineColorCell(row, cell)}
            border={defineBorderCell(row, cell)}
        ></CellContainer>
    )
}

export default Cell
