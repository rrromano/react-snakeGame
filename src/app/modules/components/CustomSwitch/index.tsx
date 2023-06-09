import { FC } from 'react'
import { useDispatch } from 'react-redux'

import { CustomSwitchStyled } from './style'
import { setTheme } from '../../../state/reducers/customSwitchReducer'

const CustomSwitch: FC = () => {
    const dispatch = useDispatch()

    const handleChangeCustomSwitch = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (event.target.checked) {
            dispatch(setTheme('dark'))
        } else {
            dispatch(setTheme('light'))
        }
    }

    return (
        <CustomSwitchStyled
            sx={{
                m: 1
            }}
            onChange={handleChangeCustomSwitch}
            defaultChecked
        />
    )
}

export default CustomSwitch
