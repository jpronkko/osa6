export const setFilter = (filter) => {
  return { type: 'SET_FILTER', filter }
}

const filterReducer = (state = '', action) => {
  if(action.type === 'SET_FILTER') {
    return action.filter
  }
  return state
}

export default filterReducer