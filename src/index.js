import React from 'react'
import PropTypes from 'prop-types'

const Dump = ({ data }) => {
  console.log(data)
  if (!data) {
    return (
      <p style={{ padding: '16px', border: 'solid 1px black', width: 'fit-content', margin: '8px', textAlign: 'center' }}>
        Data is falsy value -> {String(data)}.
        <br />
        <span style={{ backgroundColor: '#FFFF00' }}>
          @zoomelectrico/react-dump
        </span>
      </p>
    )
  }
  return (
    <div style={{ padding: '16px', border: 'solid 1px black', width: 'fit-content', margin: '8px' }}>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
      <br />
      <span style={{ backgroundColor: '#FFFF00' }}>
        @zoomelectrico/react-dump
      </span>
    </div>
  )
}

Dump.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number, PropTypes.number])
}

export default Dump
