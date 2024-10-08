import React from 'react'

import './index.css'

const  QuizAnswer= (props) => {
    const {option, checkAnswer, showNextQuestion, selectedOption} = props
    const {id, text, isCorrect} = option

    const onClickButton = () => {
      checkAnswer(id, isCorrect)
    }

  return (
    <li className="answer-list-container">
        <button className={`answer-button ${showNextQuestion ? option.isCorrect === "true" ? 'correct' : selectedOption === id ? 'wrong' : '' : ''}`} onClick={onClickButton}>{text}</button>
    </li>
  )
}

export default QuizAnswer
