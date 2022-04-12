import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LogoS from '../../assets/images/logo-c.png'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

const stringArray = ['u0ng', 'hill', 'urios', 'reative']

const Home = () => {
  const [count, setCount] = useState(0)
  const [string, setString] = useState(stringArray[0])

  useEffect(() => {
    setTimeout(() => {
      count < stringArray.length - 1
        ? setCount((count) => count + 1)
        : setCount(0)
      setString(stringArray[count])
    }, 4500)
  }, [count])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters str="Hi," idx={9} />
          <br />
          <AnimatedLetters str="I'm" idx={12} />

          <img src={LogoS} alt="developer" />

          <AnimatedLetters str={string} idx={15} />
          <br />
          <AnimatedLetters str="Web developer" idx={19} />
        </h1>

        <h2>Frontend Developer - UI/UX Designer</h2>

        <Link to={'/contact'} className="flat-button">
          CONTACT ME
        </Link>
      </div>

      <button onClick={() => setCount((count) => count + 1)}>click me</button>
      <Logo />
    </div>
  )
}

export default Home
