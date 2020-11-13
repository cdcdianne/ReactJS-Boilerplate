import { createAction } from 'redux-actions'

export const exampleAction = createAction(
    'EXAMPLE_ACTION'
)

export const exampleSuccessAction = createAction(
    'EXAMPLE_SUCCESS_ACTION'
)

export const exampleFailedAction = createAction(
    'EXAMPLE_FAILED_ACTION'
)

export const resetExampleAction = createAction(
    'RESET_EXAMPLE_ACTION'
)
