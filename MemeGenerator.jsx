import React from'react'

function MemeGenerator(props) {
    return (
        <div className='rightSide'>
            <header>Meme Generator</header>
            <form className='form' onSubmit={props.handleSubmit}>
                <input 
                    type='text'
                    name='topText'
                    placeholder='Top Text'
                    value={props.topText}
                    onChange={props.handleChange}
                /> 
                <input 
                    type='text'
                    name='bottomText'
                    placeholder='Bottom Text'
                    value={props.bottomText}
                    onChange={props.handleChange}
                /> 
                <button>Gen</button>
                <br/>
                <img src={props.randomImg} alt='' />
                <h2 className='topText'>{props.topText}</h2>
                <h2 className='bottomText'>{props.bottomText}</h2>
            </form>
        </div>
    )
}

export default MemeGenerator
