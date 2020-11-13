import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'
import routes from '../shared/routes'
import Routing from '../shared/routes/routing'

const Pages = () => {
  return (
    <Switch>
      {routes && routes.length
        ? routes.map((route) => <Routing key={route.path} {...route} />)
        : ''}
      <Route exact path="/">
        <Redirect to="/example" />
      </Route>
    </Switch>
  )
}

Pages.defaultProps = {
  location: {}
}

Pages.propTypes = {
  location: PropTypes.object
}

export default Pages
