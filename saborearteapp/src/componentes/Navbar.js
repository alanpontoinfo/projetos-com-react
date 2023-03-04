import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
//import { FaAlignRight } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
import logo from '../imagens/logo.jpg'
import social from '../mediasocial'
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} className='logo' alt='logo' />
          </Link>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            <li>
              <Link to='/'>Home</Link>
            </li>

            <li>
              <Link to='/confeitaria'> Confeitaria</Link>
            </li>
            <li>
              <Link to='/Sobre'>Sobre</Link>
            </li>
            <ul className='social-icons'>
              {social.map((socialIcon) => {
                const { id, url, icon } = socialIcon
                return (
                  <li key={id}>
                    <a href={url} target='_blank' rel='noreferrer'>
                      {icon}
                    </a>
                  </li>
                )
              })}
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
