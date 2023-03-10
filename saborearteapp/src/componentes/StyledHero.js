import styled from 'styled-components'
import defaultImg from '../imagens/logo-11.jpg'
const StyledHero = styled.header`
  min-height: 60vh;
  /* background: url(${defaultImg}); */
  background: url(${(props) => (props.img ? props.img : defaultImg)});
  display: flex;
  align-items: center;
  justify-content: center;
`

export default StyledHero
