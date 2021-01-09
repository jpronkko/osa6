import anecdoteService from '../services/anecdotes'

/*const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
*/
/*const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)
*/

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTE',
      data: anecdotes
    })}
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const data = await anecdoteService.create( { content, votes: 0 } )
    dispatch( {
      type: 'NEW_ANECDOTE',
      data
    })}
}

export const addVote = anecdote => {
  return async dispatch => {
    //console.log('voting:', anecdote)
    const data = await anecdoteService.update( { ...anecdote, votes: anecdote.votes + 1 } )
    dispatch( {
      type: 'VOTE',
      data
    })
  }
}

const anecdoteReducer = (state = [], action) => {
  //console.log('anecdote: state now: ', state)
  //console.log('anecdote: action', action)

  switch(action.type) {
  case 'VOTE':
    return state.map(x => x.id !==  action.data.id ? x : action.data)

  case 'NEW_ANECDOTE':
    return [...state, action.data]

  case 'INIT_ANECDOTE':
    return action.data

  default:
    return state
  }
}

export default anecdoteReducer