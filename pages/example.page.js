import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ExampleContext } from '../shared/contexts/example.context'

const ExamplePage = () => {
    const { example, users } = useContext(ExampleContext)

    useEffect(() => {
        example()
    }, [])

    return users && users.length ? <SampleComponent list={users} /> : 'Empty Component'
}

Example.defaultProps = {}

Example.propTypes = {}

export default ExamplePage