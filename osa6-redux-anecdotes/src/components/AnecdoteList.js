import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
//import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {
  // const anecdotes = useSelector(state => {
  //   return state.filter === '' ? state.anecdotes :
  //     state.anecdotes.filter(x =>
  //       x.content.toLowerCase()
  //         .includes(state.filter.toLowerCase())
  //     )
  // })

  /*const anecdotes = () => {
    if(props.filter === '') {
      return props.anecdotes
    }

    const filterInLowerCase = props.filter.toLowerCase()
    return props.anecdotes.filter(x =>  x.content.toLowerCase().includes(filterInLowerCase))
  }*/

  //const dispatch = useDispatch()

  const orderedAnecdotes = () => {
    //console.log(`Anekdootit: ${anecdotes}`)
    return props.anecdotes.sort((a, b) => b.votes - a.votes)
  }

  const vote = (anecdote) => {
    props.addVote(anecdote)
    props.setNotification(`You voted: ${anecdote.content}.`, 5)
  }

  return (
    <div>
      {orderedAnecdotes().map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

const mapDispatchToProps = {
  addVote,
  setNotification
}

const mapStateToProps = (state) => {
  if(state.filter === '') {
    return { anecdotes: state.anecdotes }
  }

  const filterInLowerCase = state.filter.toLowerCase()
  const anecdotes =  state.anecdotes.filter(x =>  x.content.toLowerCase().includes(filterInLowerCase))
  return { anecdotes }
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
export default ConnectedAnecdoteList
//export default AnecdoteList