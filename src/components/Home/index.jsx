import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters'
import sources from '../sources'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = sources.nameArray
  const jobArray = sources.jobArray

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['H', 'i', ',']}
            idx={9}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['I', "'", 'm']}
            idx={12}
          />

          <img src={LogoS} alt="developer" />

          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={20}
          />
        </h1>

        <h2>Frontend Developer - UI/UX Designer</h2>

        <Link to={'/contact'} className="flat-button">
          CONTACT ME
        </Link>
      </div>

      <Logo />
    </div>
  )
}

export default Home
