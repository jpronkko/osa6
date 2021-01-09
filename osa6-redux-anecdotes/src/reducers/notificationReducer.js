
export const setNotification = (notification, duration) => {
  let timeoutID = null

  return async dispatch => {
    dispatch({ type: 'MESSAGE', data: { message: notification } })
    if(timeoutID) {
      clearTimeout(timeoutID)
      timeoutID = null
    }

    timeoutID = setTimeout(() => {
      dispatch({ type: 'CLEAR' })
      timeoutID = null
    }, duration * 1000)
  }
}

export const showMessage = (message) => {
  return { type: 'MESSAGE', data: { message: message } }
}

export const clearMessage = () => {
  return { type: 'CLEAR' }
}

const notificationReducer = (state = { message: '' }, action) => {
  //console.log('state now: ', state)
  //console.log('action', action)

  switch(action.type) {
  case 'MESSAGE':
    return { message: action.data.message }
  case 'CLEAR':
    return { message: '' }
  default:
    return state
  }
}

export default notificationReducer