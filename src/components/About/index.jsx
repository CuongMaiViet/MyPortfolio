import React, { useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import anime from 'animejs/lib/anime.es.js'

const About = () => {
  useEffect(() => {
    const text = document.querySelectorAll('.about-page .text')
    const hide2 = document.querySelectorAll('.about-page .hide2')

    anime
      .timeline({
        targets: text,
      })
      .add({
        translateY: '-300%',
      })
      .add({
        targets: text[2],
        rotate: [
          { value: '-10deg', duration: 1000 },
          { value: 0, delay: 300 },
        ],
        translateY: [{ value: '-280%', duration: 1000 }, { value: '-300%' }],
        delay: 2000,
      })
      .add({
        targets: text[2],
        delay: 2000,
        rotate: [
          { value: '-125deg', duration: 900 },
          { value: '-55deg', duration: 900 },
          { value: '-105deg', duration: 1000 },
          { value: '-75deg', duration: 1000 },
          { value: '-95deg', duration: 1100 },
          { value: '-80deg', duration: 1100 },
        ],
        easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)',
      })
      .add({
        targets: text[2],
        translateY: '-280%',
        duration: 1000,
      })
      .add({
        rotate: '-100deg',
        easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)',
        translateY: '1000%',
      })
      .add({
        update: () => {
          hide2.forEach((h) => {
            h.style.overflow = 'hidden'
            h.style.position = 'relative'
          })
        },
      })
      .add({
        rotate: 0,
        translateY: { value: '100%' },
        easing: 'cubicBezier(0.000, 0.000, 0.580, 1.000)',
        duration: 100,
      })
      .add({
        translateY: 0,
        duration: 1200,
        delay: anime.stagger(500, { direction: 'reverse' }),
        elasticity: 800,
      })
    // anime({
    //   targets: '.text',
    //   translateY: ['100%', 0],
    //   scale: [0, 1],
    //   duration: 1500,
    //   delay: anime.stagger(700, { start: 2000 }),
    //   // easing: 'easeInOutQuad',
    //   elasticity: 800,
    //   // easing: 'spring',
    // })
  }, [])
  return (
    <div className="container about-page">
      <div className="text-zone">
        {/* <div className="about-me"> */}
          <h1>
            <AnimatedLetters str="ABOUT ME" idx={15} />
          </h1>

          {/* <div class="message">
            <div class="word1">close</div>
            <div class="word2">code</div>
            <div class="word3">creating</div>
          </div> */}
        {/* </div> */}

        <div className="hide">
          <p className="hide2">
            <span className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
              aliquid ut dicta in beatae ratione. Sequi ratione accusamus
              debitis, libero blanditiis dolorem aperiam eveniet dicta tempora.
              Sunt blanditiis delectus harum.
            </span>
          </p>
          <p className="hide2">
            <span className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
              aliquid ut dicta in beatae ratione. Sequi ratione accusamus
              debitis, libero blanditiis dolorem aperiam eveniet dicta tempora.
              Sunt blanditiis delectus harum.
            </span>
          </p>
          <p className="hide2">
            <span className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
              aliquid ut dicta in beatae ratione. Sequi ratione accusamus
              debitis, libero blanditiis dolorem aperiam eveniet dicta tempora.
              Sunt blanditiis delectus harum.
            </span>
          </p>
        </div>

        {/* <p className="hide">
          <span className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
            aliquid ut dicta in beatae ratione. Sequi ratione accusamus debitis,
            libero blanditiis dolorem aperiam eveniet dicta tempora. Sunt
            blanditiis delectus harum.
          </span>
        </p>

        <p className="hide">
          <span className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
            aliquid ut dicta in beatae ratione. Sequi ratione accusamus debitis,
            libero blanditiis dolorem aperiam eveniet dicta tempora. Sunt
            blanditiis delectus harum.
          </span>
        </p> */}
      </div>
    </div>
  )
}

export default About
