import {Component} from 'react'

import './index.css'

const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  onTogglePlusMinusImageClick = () => {
    const {isActive} = this.state
    this.setState({isActive: !isActive})
  }

  returnAnswerOfFaq = () => {
    const {eachFaq} = this.props
    const {answerText} = eachFaq
    const {isActive} = this.state

    if (isActive) {
      return (
        <div className="each-faq-answer-container">
          <hr className="each-faq-horizontal-line" />
          <p className="each-faq-answer-text"> {answerText} </p>
        </div>
      )
    }
    return null
  }

  returnPlusOrMinusImage = () => {
    const {isActive} = this.state

    if (isActive) {
      return (
        <button type="button" className="each-plus-minus-button">
          <img
            src={minusImage}
            alt="minus"
            className="plus-icon"
            onClick={this.onTogglePlusMinusImageClick}
          />
        </button>
      )
    }
    return (
      <button type="button" className="each-plus-minus-button">
        <img
          src={plusImage}
          alt="plus"
          className="plus-icon"
          onClick={this.onTogglePlusMinusImageClick}
        />
      </button>
    )
  }

  render() {
    const {eachFaq} = this.props
    const {questionText} = eachFaq
    return (
      <li className="each-faq-container">
        <div className="each-faq-question-container">
          <h1 className="each-faq-question-text"> {questionText} </h1>
          {this.returnPlusOrMinusImage()}
        </div>
        {this.returnAnswerOfFaq()}
      </li>
    )
  }
}

export default FaqItem
