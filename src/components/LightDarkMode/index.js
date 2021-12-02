import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isClicked: false}

  onClicked = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  getButton = () => {
    const {isClicked} = this.state
    const userDetails = {
      buttonText: isClicked ? 'Dark Mode' : 'Light Mode',
      modelclassName: isClicked ? 'light-mode' : 'dark-mode',
    }
    return userDetails
  }

  render() {
    const {buttonText, modelclassName} = this.getButton()

    console.log(`${modelclassName}`)

    return (
      <div className="app-container">
        <div className={`container ${modelclassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" onClick={this.onClicked} className="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
