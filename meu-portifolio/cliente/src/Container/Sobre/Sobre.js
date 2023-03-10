import React, { useEffect } from 'react'
import TituloCabecalho from '../../utilidades/TituloCabecalho/TituloCabecalho'
import ServicoScroll from '../../utilidades/ServicoScroll'
import Animacao from '../../utilidades/Animacao'

import './Sobre.css'

export default function sobre(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id)
      return Animacao.animacao.fadeInScreen(props.id)
  }

  const fadeInSubscription =
    ServicoScroll.atualScreenFadeIn.subscribe(fadeInScreenHandler)

  const CONSTATANTES_SCREEN = {
    descricao: 'Desenvolvedor Web Full Stack utilizando MERN',
    destaques: {
      principal: [
        ' Full Stack desenvolvimento web',
        'Front end e Back End Intertivo',
        'Javascript , React ',
        'Construção de API REST',
        'Gerenciamento de Banco de Dados',
      ],
      cabecalho: 'Aqui tem um pouco do meu conhecimento',
    },
  }

  const renderHighLight = () => {
    return CONSTATANTES_SCREEN.destaques.principal.map((valor, i) => (
      <div className='highlight' key={i}>
        <div className='highlight-blob'></div>
        <span>{valor}</span>
      </div>
    ))
  }

  return (
    <div
      className='sobre-container screen-container fade-in'
      id={props.id || ''}
    >
      <div className='sobre-parent'>
        <TituloCabecalho
          titulo={'Sobre'}
          subCabecalho={'Por quê Escolher-me?'}
        />
        <div className='sobre-card'>
          <div className='sobre-profile'></div>
          <div className='sobre-details'>
            <span className='sobre-description'>
              {CONSTATANTES_SCREEN.descricao}
            </span>
            <div className='sobre-highlights'>
              <div className='highlight-heading'>
                <span>{CONSTATANTES_SCREEN.destaques.cabecalho}</span>
              </div>
              {renderHighLight()}
            </div>
            <div className='sobre-options'>
              <button
                className='btn primary-btn'
                onClick={() => ServicoScroll.scrollHandler.scrollParaOcultar()}
              >
                {''}
                Sair Daqui{''}
              </button>
              <a href='alansantos.pdf' download={'Alan Santos.pdf'}>
                <button className='btn highlighted-btn'>
                  Baixe curriculum
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
