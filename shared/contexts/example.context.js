import React, { createContext } from 'react'
import { exampleAction } from '../shared/actions/example.action'

export const ExampleContext = createContext()

const ExampleProvider = ({ children }) => {
    const example = useDispatch(exampleAction)
    const users = useSelector(state => state.users)

    const payload = {
        example,
        users
    }
    
    return (
        <MessageSettingsContext.Provider value={payload}>
            {children}
        </MessageSettingsContext.Provider>
    )
}

export default ExampleProvider
