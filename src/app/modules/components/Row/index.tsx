import { FC } from 'react'

import { RowContainer } from './style'
import Cell from '../Cell'

const Row: FC<{
    row: Array<number>
    indexRow: number
    snake: Array<Array<number>>
    apple: Array<number>
}> = ({ row, indexRow, snake, apple }) => {
    return (
        <RowContainer cellsLength={row.length}>
            {row.map((cell: number) => {
                return (
                    <Cell
                        key={cell}
                        row={indexRow}
                        cell={cell}
                        snake={snake}
                        apple={apple}
                    ></Cell>
                )
            })}
        </RowContainer>
    )
}

export default Row
