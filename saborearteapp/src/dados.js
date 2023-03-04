//const img00 = './imagens/bolo-1.jpg'
import img00 from './imagens/bolo-1.jpg'
import img01 from './imagens/bolo-2.jpg'
import img02 from './imagens/bolo3.jpg'
import img03 from './imagens/bolo-4.jpg'
import img04 from './imagens/bolo-5.jpg'
import img05 from './imagens/bolo-6.jpg'
import img06 from './imagens/doce.jpg'
import img07 from './imagens/salgado-1.jpg'
import img08 from './imagens/salgado-2.jpg'
import img09 from './imagens/sequilho-1.jpg'
import img10 from './imagens/kit-salgado1.jpg'
import img11 from './imagens/kit-salgado2.jpg'
import img12 from './imagens/kit-salgado3.jpg'

export const menu = [
  {
    id: 1,
    titulo: 'Bolo de Casamento',
    slug: 'bolo-casamento',
    categoria: 'bolos',
    preco: 80.9,
    img: img00,
    desc: ``,
    detalhes: true,
  },
  {
    id: 2,
    titulo: 'Bolo de Aniversario',
    slug: 'bolo-aniversario2',
    categoria: 'bolos',
    preco: 100,
    img: img01,
    desc: ``,
    detalhes: false,
  },
  {
    id: 3,
    titulo: 'Bolo de Aniversario',
    slug: 'bolo-aniversario3',
    categoria: 'bolos',

    preco: 90,
    img: img02,
    desc: ``,
    detalhes: false,
  },
  {
    id: 4,
    titulo: 'Bolo Padrão',
    slug: 'bolo-padrao',
    categoria: 'bolos',
    preco: 70,
    img: img03,
    desc: ``,
    detalhes: false,
  },
  {
    id: 5,
    titulo: 'Bolo de Aniversario',
    slug: 'bolo-aniversario4',
    categoria: 'bolos',

    preco: 100,
    img: img04,
    desc: ``,
    detalhes: false,
  },
  {
    id: 6,
    titulo: 'Bolo de Casamento',
    slug: 'bolo-casamento2',
    categoria: 'bolos',

    preco: 100,
    img: img05,
    desc: ``,
    detalhes: false,
  },

  {
    id: 7,
    titulo: 'Doces de chocoloate recheioso',
    slug: 'doce-chcolate-recheioso',
    categoria: 'doces',

    preco: 50,
    img: img06,
    desc: ``,
    detalhes: false,
  },

  {
    id: 8,
    titulo: 'Empanadas',
    slug: 'empanadas',
    categoria: 'salgados',
    preco: 80,
    img: img07,
    desc: ``,
    detalhes: false,
  },

  {
    id: 9,
    titulo: 'Coxinhas',
    slug: 'coxinhas',
    categoria: 'salgados',
    preco: 90,
    img: img08,
    desc: ``,
    detalhes: false,
  },

  {
    id: 10,
    titulo: 'Sequilhos',
    slug: 'sequilhos',
    categoria: 'salgados',
    preco: 60,
    img: img09,
    desc: ``,
    detalhes: true,
  },

  {
    id: 11,
    titulo: 'Kit Pequeno',
    slug: 'kit-pequeno',
    categoria: 'kits',
    preco: 140,
    img: img10,
    desc: `Uma Torta de 15cm - 15 Salgados - 10 Doces`,
    detalhes: true,
  },
  {
    id: 12,
    titulo: 'Kit Medio',
    slug: 'kit-medio',
    categoria: 'kits',
    preco: 220,
    img: img11,
    desc: `Uma Torta de 20cm - 30 Salgados - 20 Doces`,
    detalhes: true,
  },

  {
    id: 13,
    titulo: 'Kit Grande',
    slug: 'kit-grande',
    categoria: 'kits',
    preco: 310,
    img: img12,
    desc: `Uma Torta de 30cm - 50 Salgados - 30 Doces`,
    detalhes: true,
  },
]
export default menu
