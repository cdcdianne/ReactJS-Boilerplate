import { handleActions } from 'redux-actions'
import { exampleAction } from '../actions/example.action'

const defaultState = {
    users: []
}

const reducer = handleActions(
    {
        [exampleAction]: state => ({
            ...state,
            status: {
                submitted: true,
                success: false,
                loading: true,
                type: 'example'
            }
        }),
        [exampleSuccessAction]: (state, { payload }) => ({
            ...state,
            users: payload,
            status: {
                submitted: true,
                success: true,
                loading: false,
                type: 'example'
            }
        }),
        [exampleFailedAction]: (state, { payload }) => ({
            ...state,
            status: {
                message: payload,
                submitted: true,
                success: false,
                loading: false,
                type: 'example'
            }
        }),
        [resetExampleAction]: state => ({
            ...state,
            status: {
                submitted: false,
                success: false,
                loading: false,
                type: 'resetExample'
            }
        }),
    },
    defaultState
)

export default reducer
