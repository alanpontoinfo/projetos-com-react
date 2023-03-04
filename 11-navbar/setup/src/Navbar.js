import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    console.log(linksHeight)
    console.log(showLinks)
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
      console.log(linksContainerRef)
      console.log('altura antes =>', linksContainerRef.current.style.height)
    } else {
      linksContainerRef.current.style.height = '0px'
      console.log('altura depois=>', linksContainerRef.current.style.height)
    }
  }, [showLinks])
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        {/** Antes do div  {showLinks && (*/}
        {/* ou dentro da className*{`${
            showLinks ? 'links-container show-container' : 'links-container'
          }`} */}
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        {/** )}*/}
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
