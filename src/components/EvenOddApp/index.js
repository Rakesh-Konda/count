import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {randomNum: 0, even: true}

  change = () => {
    this.setState(prevState => {
      const num = Math.floor(Math.random() * 101)
      const even1 = num % 2 === 0
      return {randomNum: num, even: even1}
    })
  }

  render() {
    const {randomNum} = this.state

    const {even} = this.state

    return (
      <div className="bg">
        <h1>Count {randomNum}</h1>
        <p>Count is {even ? 'Even' : 'Odd'}</p>
        <button type="button" className="but" onClick={this.change}>
          Increment
        </button>
        <p>Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
