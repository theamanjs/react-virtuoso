import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { GroupedVirtuoso } from '../src'

const App = () => {
  const [visible, setVisible] = React.useState(true)
  return (
    <>
      <button onClick={() => setVisible((val: boolean) => !val)}>Toggle</button>
      <GroupedVirtuoso
        style={{ display: visible ? 'block' : 'none', height: '300px' }}
        groupCounts={Array.from({ length: 20 }).fill(3) as number[]}
        itemContent={index => <div style={{ height: '20px' }}>Item {index}</div>}
        groupContent={index => <div style={{ height: '30px' }}>Group {index}</div>}
      />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
