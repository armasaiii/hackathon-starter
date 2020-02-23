import React from'react'

function Joke(props) {
        const text = props.loading ? 'loading...' : props.loadJoke
        return (
            <div className='leftSide'>
                <header>Joke Generator</header>
                <form className='meme-form' onSubmit={props.handleJokeSubmit}>
              
                <button>Gen</button>

                <img src={props.randomJoke} alt='' />
            </form>
                <p name='test'>{text}</p>
            </div>
        )
    }

export default Joke
