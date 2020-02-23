import React from 'react'
import Header from './Header'
import MemeGenerator from './MemeGenerator'
import Joke from './Joke'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: [],
            loading: false,
            character: {},
            randomJoke: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleJokeSubmit = this.handleJokeSubmit.bind(this)
        //this.jokeAPI = this.jokeAPI.bind(this)
        //this.componentDidMount = this.componentDidMount.bind(this)
        // this.handleJokeAPI = this.handleJokeAPI.bind(this)
        // this.handleJokeSubmit = this.handleJokeSubmit.bind(this)
    }
    
    componentWillMount() {
       fetch('https://api.imgflip.com/get_memes')
    //    let jokes = fetch('')
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes })
            })
    }
    
    handleChange(event) {
        event.preventDefault()
        const {name, value} = event.target
        this.setState({[name]: value })
        console.log('Working', name)
    }
    
    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("https://sv443.net/jokeapi/v2/joke/Any?id")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })
    }

    handleJokeSubmit(event) {
        event.preventDefault()
        const randJo = Math.floor(Math.random() * this.state.character.length)
        const jokeRand = this.state.allMemeImgs[randJo]
        this.setState({ randomJoke: jokeRand })
    }

    
    render() {
        return (
            <div className='jnm'>
                <Header/>

                <MemeGenerator
                    className = 'rightSide'
                    topText = {this.state.topText}
                    bottomText = {this.state.bottomText}
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    randomImg = {this.state.randomImg}
                />

                <Joke 
                    loading = {this.state.loading}
                    loadJoke = {this.state.character.joke}
                    handleJokeSubmit = {this.handleJokeSubmit}
                    randomJoke = {this.state.randomJoke}

                />
            </div>
        )
    }
}

export default App
