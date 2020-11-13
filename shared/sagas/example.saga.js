import { all, call, put, takeLatest } from 'redux-saga/effects'
import { exampleAction, exampleSuccessAction, exampleFailedAction } from '../actions/example.action'
import exampleService from '../services/example.service'

function* example(action) {
    try {
        const { data } = yield call(exampleService.getExample, action.payload)
        yield put(exampleSuccessAction(data))
    } catch (error) {
        yield put(exampleFailedAction(error))
    }
}

export default function* root() {
    yield all([
        takeLatest(exampleAction.toString(), example),
    ])
}
