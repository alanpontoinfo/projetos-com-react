import React from 'react'
import Typical from 'react-typical'
import ServicoScroll from '../../../utilidades/ServicoScroll'
import './Perfil.css'

export default function Perfil() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href='#'>
                <i className='fa fa-facebook-square' />
              </a>
              <a href='#'>
                <i className='fa fa-google-plus-square' />
              </a>
              <a href='#'>
                <i className='fa fa-instagram' />
              </a>
              <a href='#'>
                <i className='fa fa-youtube-square' />
              </a>
              <a href='#'>
                <i className='fa fa-twitter' />
              </a>
            </div>
          </div>
          <div className='profile-details-name'>
            <span className='primary-text'>
              {''}
              Olá, Eu sou <span className='highlighted-text'> Alan </span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              {' '}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    'Desenvolvedor web 🎈 ',
                    1000,
                    'Full stack 💻 ',
                    1000,
                    'MERN 🎰 ',
                    1000,
                    'Html Css Javascript 🧗 ',
                    1000,
                    'API,s 🏗 ',
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className='profile-role-tagline'>
              Construçoes de aplicações web modernos e api,'s
            </span>
          </div>

          <div className='profile-options'>
            <button
              className='btn primary-btn'
              onClick={() => ServicoScroll.scrollHandler.scrollParaOcultar()}
            >
              {''}
              Sair Daqui{''}
            </button>
            <a href='curriculum.pdf' download={'Alan Curriculum.pdf'}>
              <button className='btn highlighted-btn'>Baixe curriculum</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  )
}
