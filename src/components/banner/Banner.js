import seta from '../../assets/icon/icon-arrow-down.svg'

import { Container, Image } from 'react-bootstrap';

import './Banner.scss';
import '../../styles.scss';

export const Banner = () => {
  return (
    <Container fluid className="banner__content">
      <p className='title'>We are creatives</p>
      <Image className='seta' src={seta}></Image>
    </Container>
  )
}