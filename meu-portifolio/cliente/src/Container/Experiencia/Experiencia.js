import React, { useState, useEffect } from 'react'
import TituloCabecalho from '../../utilidades/TituloCabecalho/TituloCabecalho'

import ServicoScroll from '../../utilidades/ServicoScroll'

import Animacao from '../../utilidades/Animacao'

import './Experiencia.css'

//import imagem from '../../assets/Resume/'

const Experiencia = (props) => {
  /*states*/
  const [IndexPrincipalSelecionado, setIndexPrincipalSelecionado] = useState(0)
  const [carroselOfStyle, setCarrosselOfStyle] = useState({})

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return

    Animacao.animacao.fadeInScreen(props.id)
  }

  const fadeInSubscription =
    ServicoScroll.atualScreenFadeIn.subscribe(fadeInScreenHandler)

  /** Reusar Componentes menores */

  const CabecalhoExperiencia = (props) => {
    return (
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet'></div>
          <span>{props.cabecalho ? props.cabecalho : ''}</span>
          {props.fromDate && props.toDate ? (
            <div className='heading-date'>
              {props.fromDate + '-' + props.toDate}
            </div>
          ) : (
            <div> </div>
          )}
        </div>
        <div className='resume-sub-heading'>
          <span>{props.subCabecalho ? props.subCabecalho : ''}</span>
        </div>
        <div className='resume-heading-description'>
          <span>{props.descricao ? props.descricao : ''}</span>
        </div>
      </div>
    )
  }
  /** Dados Staticos para rotulos */

  const principalExperiencia = [
    { label: 'Educação', logoSrc: 'education.svg' },
    { label: 'Historico', logoSrc: 'work-history.svg' },
    { label: 'Habilidades em Programação', logoSrc: 'programming-skills.svg' },
    { label: 'Projetos', logoSrc: 'projects.svg' },
    { label: 'Interesses', logoSrc: 'interests.svg' },
  ]

  // habilidades
  const DetalhesHabilidades = [
    { habilidade: 'Javascript', ratingPercentage: 75 },
    { habilidade: 'React JS', ratingPercentage: 75 },
    { habilidade: 'Express JS', ratingPercentage: 80 },
    { habilidade: 'Node JS', ratingPercentage: 70 },
    { habilidade: 'Mongo DB', ratingPercentage: 65 },
    { habilidade: 'HTML', ratingPercentage: 85 },
    { habilidade: 'CSS', ratingPercentage: 85 },
  ]

  const detalhesProjeto = [
    {
      titulo: ' Portifolio Pessoal',
      duracao: { fromDate: '2020', toDate: '2021' },
      descricao:
        'Um WebSite Pessoal que mostra alguns dos meu projetos e detalhes das tecnologias utilizadas ',
      subCabecalho: 'Tecnoloiga usada: React Js, Bootstrap',
    },
    {
      titulo: 'LandPages',
      duracao: { fromDate: '2021', toDate: '2022' },
      descricao: 'Website para divulgar os serviços de Contabilidade',
      subCabecalho: 'Tecnologia Usada: Html, Javascript, Css',
    },
    {
      titulo: 'Ecommerce Loja Virtual',
      duracao: { fromDate: '2020', toDate: '2021' },
      descricao:
        'Loja virtal que divulga os produtos para venda online com sistema de pagamento integrado Paypal e um painel Administrativo',
      subCabecalho:
        'tecnologia Usada: Mongo DB, Express JS, React Js, Node JS, Bootstrap',
    },
  ]

  const detalhesExperiencia = [
    <div className='resume-screen-container' key='educacao'>
      <CabecalhoExperiencia
        cabecalho={'Centro Universitário da Bahia'}
        subCabecalho={'BACHAREL EM SISTEMAS DE INFORMAÇÃO'}
        fromDate={'2005'}
        toDate={'2011'}
      />
      <CabecalhoExperiencia
        cabecalho={'FreeCodeCamp'}
        subCabecalho={'Responsive Web Design'}
        fromDate={'2021'}
        toDate={'2021'}
      />
      <a href='https://www.freecodecamp.org/certification/fcc9e9a63cb-d21d-4d89-ad1a-40f98d9f86c1/responsive-web-design'>
        Verificar Certificação e projetos
      </a>
      <CabecalhoExperiencia
        subCabecalho={'JavaScript Algorithms and Data Structures'}
        fromDate={'2021'}
        toDate={'2021'}
      />
      <a href='https://www.freecodecamp.org/certification/fcc9e9a63cb-d21d-4d89-ad1a-40f98d9f86c1/javascript-algorithms-and-data-structures'>
        Verificar Certificação e projetos
      </a>
      <CabecalhoExperiencia
        subCabecalho={'Front End Development Libraries React Js'}
        fromDate={'2021'}
        toDate={'2021'}
      />
      <a href='https://www.freecodecamp.org/certification/fcc9e9a63cb-d21d-4d89-ad1a-40f98d9f86c1/front-end-development-libraries'>
        Verificar Certificação e projetos
      </a>

      <CabecalhoExperiencia
        subCabecalho={'Back End Development and APIs'}
        fromDate={'2021'}
        toDate={'2021'}
      />
      <a href='https://www.freecodecamp.org/certification/fcc9e9a63cb-d21d-4d89-ad1a-40f98d9f86c1/back-end-development-and-apis'>
        Verificar Certificação e projetos
      </a>
      <CabecalhoExperiencia
        cabecalho={'MongoDB University'}
        subCabecalho={'MongoDb for Sql Pros'}
        fromDate={'2021'}
        toDate={'2021'}
      />
      <a href='https://university.mongodb.com/course_completion/ec6d446e-a80b-498f-bd33-6cf5a07c94c0'>
        Verificar Certificação e projetos
      </a>
    </div>,

    /* Experiência de Trabalho */
    <div className='resume-screen-container' key='experiencia-trabalho'>
      <div className='experience-container'>
        <CabecalhoExperiencia
          cabecalho={'Max Projetos'}
          subTitulo={'Desenvolvedor Web'}
          fromDate={'2020'}
          toDate={'2021'}
        />
        <div className='experience-description'>
          <span className='resume-description-text'>
            -Desenvolvimento de api's modelagem banco de dados criação de
            tabelas com java / spring Boot/ mysql
          </span>
        </div>
        <CabecalhoExperiencia
          cabecalho={'Free Lance'}
          subTitulo={'Desenvolvedor Web'}
          fromDate={'2021'}
          toDate={'Atual'}
        />
        <div className='experience-description'>
          <span className='resume-description-text'>
            -Desenvolvimento de Websites, landPages, Loja virtual. Tecnologias:
            React js, css, html, javascript, Express js, mongoDb, Node js .{' '}
          </span>
        </div>
      </div>
    </div>,
    /*Habilidades*/
    <div
      className='resume-screen-container programming-skills-container'
      key='habilidades'
    >
      {DetalhesHabilidades.map((habilidade, index) => (
        <div className='skill-parent' key={index}>
          <div className='heading-bullet'></div>
          <span>{habilidade.habilidade}</span>
          <div className='skill-percentage'>
            <div
              style={{ width: habilidade.ratingPercentage + '%' }}
              className='active-percentage-bar'
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /*PROjetos */
    <div className='resume-screen-container' key='projetos'>
      {detalhesProjeto.map((detalhesProjeto, index) => (
        <CabecalhoExperiencia
          key={index}
          cabecalho={detalhesProjeto.titulo}
          subCabecalho={detalhesProjeto.subCabecalho}
          descricao={detalhesProjeto.descricao}
          fromDate={detalhesProjeto.duracao.fromDate}
          toDate={detalhesProjeto.duracao.toDate}
        />
      ))}
    </div>,

    /* Interesses */

    <div className='resume-screen-container' key='interesses'>
      <CabecalhoExperiencia
        cabecalho='Aprender e compartilhar'
        descricao='Eu gosto de está aprendendo sobre novas tecnologias linguagem de programação e outras linguas'
      />
      <CabecalhoExperiencia
        cabecalho='Musica'
        descricao=' Gosto de som que ajuda minha concentração e instrumentos musicais  que me acalmam e faz refletir. Como violão e gaita.'
      />
      <CabecalhoExperiencia
        cabecalho='Esportes'
        descricao='Praticar esporte ao ar livre é o local onde retiro meu stress e transformo em energia'
      />
    </div>,
  ]

  const manipulaCarrossel = (index) => {
    let deslocaAltura = 480
    let deslocaNovoCarrossel = {
      style: { transform: 'translateY(' + index * deslocaAltura * -1 + 'px' },
    }

    setCarrosselOfStyle(deslocaNovoCarrossel)
    setIndexPrincipalSelecionado(index)
  }

  const getPrincipal = () => {
    return principalExperiencia.map((principal, index) => (
      <div
        onClick={() => manipulaCarrossel(index)}
        className={
          index === setIndexPrincipalSelecionado
            ? 'bullet selected-bullet'
            : 'bullet'
        }
        key={index}
      >
        <img
          className='bullet-logo'
          src={require(`../../assets/Resume/${principal.logoSrc}`)}
          alt='B'
        />
        <span className='bullet-label'>{principal.label}</span>
      </div>
    ))
  }

  const getExperienciaScreens = () => {
    return (
      <div style={carroselOfStyle.style} className='resume-details-carousal'>
        {detalhesExperiencia.map((DetalheExperiencia) => DetalheExperiencia)}
      </div>
    )
  }

  useEffect(() => {
    return () => {
      /* Cancelara as incriçoes */
      fadeInSubscription.unsubscribe()
    }
  }, [fadeInSubscription])
  return (
    <div
      className='resume-container screen-container fade-in'
      id={props.id || ''}
    >
      <div className='resume-content'>
        <TituloCabecalho
          titulo={'Experiencia Profissional'}
          subCabecalho={'Detalhes da minha experiencia'}
        />
        <div className='resume-card'>
          <div className='resume-bullets'>
            <div className='bullet-container'>
              <div className='bullet-icons'></div>
              <div className='bullets'>{getPrincipal()}</div>
            </div>
          </div>
          <div className='resume-bullet-details'>{getExperienciaScreens()}</div>
        </div>
      </div>
    </div>
  )
}

export default Experiencia
