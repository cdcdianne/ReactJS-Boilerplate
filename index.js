import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './shared/config/store.config'
import Pages from './pages'

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <ExampleProvider>
                    <Pages />
                </ExampleProvider>
            </Router>
        </Provider>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))
