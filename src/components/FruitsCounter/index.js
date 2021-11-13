// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0, bananasCount: 0}

  onClickMango = () => {
    this.setState(prevState => {
      console.log(`previous state is ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  onClickBanana = () => {
    this.setState(prevState => {
      console.log(`previous state is ${prevState.bananasCount}`)
      return {bananasCount: prevState.bananasCount + 1}
    })
  }

  render() {
    const {count} = this.state
    const {bananasCount} = this.state
    return (
      <div className="fruit-container">
        <div className="sub-container">
          <h1 className="heading">
            Bob ate {count} mangoes {bananasCount} bananas
          </h1>
          <div className="main-fruit-container">
            <div className="sub-fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-img"
              />
              <button
                className="mango-and-banana-button"
                type="button"
                onClick={this.onClickMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="sub-fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-img"
              />
              <button
                className="mango-and-banana-button"
                type="button"
                onClick={this.onClickBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
