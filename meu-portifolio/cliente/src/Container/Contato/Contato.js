import React, { useState } from 'react'
import Typical from 'react-typical'
import axios from 'axios'
import { toast } from 'react-toastify'

import imagem from '../../../src/assets/images/mailz.jpeg'
import loading from '../../../src/assets/images/load2.gif'

import TituloCabecalho from '../../utilidades/TituloCabecalho/TituloCabecalho'
import ServicoScroll from '../../utilidades/ServicoScroll'
import Animacao from '../../utilidades/Animacao'
import Rodape from '../../Container/rodape/Rodape'
import './Contato.css'

export default function Contato(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return
    Animacao.animacao.fadeInScreen(props.id)
  }

  const fadeInSubscription =
    ServicoScroll.atualScreenFadeIn.subscribe(fadeInScreenHandler)

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [banner, setBanner] = useState('')
  const [transf, setTransf] = useState(false)

  const manipulaNome = (e) => {
    setNome(e.target.value)
  }

  const manipulaEmail = (e) => {
    setEmail(e.target.value)
  }
  const manipulaMensagem = (e) => {
    setMensagem(e.target.value)
  }
  //console.log(nome)
  const submitForm = async (e) => {
    e.preventDefault()
    try {
      let dados = {
        nome,
        email,
        mensagem,
      }
      setTransf(true)
      const res = await axios.post(`/contato`, dados)
      if (nome.length === 0 || email.length === 0 || mensagem.length === 0) {
        setBanner(res.dados.msg)
        setTransf(false)

        setNome('')
        setEmail('')
        setMensagem('')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='main-container fade-in' id={props.id || ''}>
      <TituloCabecalho subCabecalho={'Manter o Contato'} titulo={'Contato'} />
      <div className='central-form'>
        <div className='col'>
          <h2 className='title'>
            <Typical loop={Infinity} steps={['Pegue meu Contato', 1000]} />
          </h2>
          <a href='https://web.facebook.com/?_rdc=1&_rdr'>
            <i className='fa fa-facebook-square' />
          </a>
          <a href='#'>
            <i className='fa fa-google-plus-square' />
          </a>
          <a href='https://www.instagram.com/'>
            <i className='fa fa-instagram' />
          </a>
          <a href='https://www.youtube.com/'>
            <i className='fa fa-youtube-square' />
          </a>
          <a href='https://twitter.com/'>
            <i className='fa fa-twitter' />
          </a>
        </div>
        <div className='back-form'>
          <div className='img-back'>
            <h4> Enviar Seu Email Aqui</h4>
            <img src={imagem} alt='image not fount' />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor='name'>Nome</label>
            <input type='text' onChange={manipulaNome} value={nome} />

            <label htmlFor='email'>Email</label>
            <input type='email' onChange={manipulaEmail} value={email} />

            <label htmlFor='message'>Mensagem</label>
            <textarea
              type='text'
              onChange={manipulaMensagem}
              value={mensagem}
            />

            <div className='send-btn'>
              <button type='submit'>
                enviar
                <i className='fa fa-paper-plane' />
                {transf ? (
                  <b className='load'>
                    <img src={loading} alt='image not responding' />
                  </b>
                ) : (
                  ''
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Rodape />
    </div>
  )
}
