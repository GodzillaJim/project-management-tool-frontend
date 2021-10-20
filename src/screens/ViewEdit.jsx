import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'

const ViewEdit = () => {
  const { pid } = useParams()
  return (
        <div>
            Hello world, {pid}
        </div>
  )
}

ViewEdit.propType = {
  project: PropTypes.object
}
export default ViewEdit
