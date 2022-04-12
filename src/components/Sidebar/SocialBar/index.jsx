import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faGithub,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
const SocialBar = () => {
  return (
    <div className="social-bar">
      <ul>
        <li style={{ '--clr': '#1877f2' }}>
          <a
            target={'_blank'}
            rel="noreferrer"
            href="https://www.facebook.com/hayhieuminh789"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>

        <li style={{ '--clr': '#ff0000' }}>
          <a
            target={'_blank'}
            rel="noreferrer"
            href="https://www.facebook.com/hayhieuminh789"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>

        <li style={{ '--clr': '#1da1f2' }}>
          <a
            target={'_blank'}
            rel="noreferrer"
            href="https://www.linkedin.com/in/mai-cuong-ab98b21b6/"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>

        <li style={{ '--clr': '#25d366' }}>
          <a
            target={'_blank'}
            rel="noreferrer"
            href="https://www.facebook.com/hayhieuminh789"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </li>
        <li style={{ '--clr': '#c32aa3' }}>
          <a
            target={'_blank'}
            rel="noreferrer"
            href="https://github.com/CuongMaiViet"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialBar
