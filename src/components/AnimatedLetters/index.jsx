import './index.scss'
import React, { useState, useEffect } from 'react'

const AnimatedLetters = ({ str, idx }) => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4500)
  }, [])

  return (
    <span>
      {str &&
        str.split('').map((char, i) => (
          <span key={char + i} className={`${letterClass} _${i + idx}`}>
            {char}
          </span>
        ))}
    </span>
  )
}

export default AnimatedLetters
