import React, { Component } from 'react'

import ExampleComponent from '@zoomelectrico/react-dump'

const data =
  {
    data: {
      algo: '1',
      beta: 2
    },
    array: [1, 2, 2]
  }

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent data={data} />
      </div>
    )
  }
}
