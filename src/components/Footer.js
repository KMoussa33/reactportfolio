import { Container, Row, Col } from 'reactstrap';
// import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        {/* <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/projects'>Projects</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul> */}
                    </Col>
                    <Col xs='6' sm='3' className='text-center'>
                        <h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://github.com/'
                        >
                            <i className='fa fa-github' />
                        </a>
                    </Col>
                    <Col sm='4' className='text-center'>
                    <a
                        role='button'
                        className='btn btn-link text-black'
                        href='tel:+19478861318'
                    >
                        <i className='fa fa-phone text-black' /> 1-947-886-1318
                    </a>
                    <br />
                    <a
                        role='button'
                        className='btn btn-link text-black'
                        href='mailto:kelsey.moussa@gmail.com'
                    >
                        <i className='fa fa-envelope-o text-black' /> kelsey.moussa@gmail.com
                    </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;