import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }

  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }

  const neutral = () => {
    store.dispatch({
      type: 'OK'
    })
  }

  const zero = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  const allCount = () => {
    const state = store.getState()
    return state.good + state.bad + state.ok
  }


  const average = () => {
    const count = allCount()
    const state = store.getState()

    return count === 0 ? 0 : (state.good - state.bad) / count
  }

  const positive = () => {
    const count = allCount()
    const state = store.getState()

    return count === 0 ? 0 : state.good / count
  }

  return (
    <div>
      <button onClick={good}>good</button>
      <button onClick={neutral}>neutral</button>
      <button onClick={bad}>bad</button>
      <button onClick={zero}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>neutral {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
      <div>total votes {allCount()}</div>
      <div>average {average().toFixed(2)}</div>
      <div>positive {100 * positive().toFixed(2)}%</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
