import React from 'react'
import PropTypes from 'prop-types'

const Example = ({ list }) => {
    return list && list.length ? list.map((item) => <span key={item.id}></span>) : ''
}

Example.propTypes = {
    list: PropTypes.array.isRequired
}

export default Example