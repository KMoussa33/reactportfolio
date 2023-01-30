import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Contact Me' />

            <Row className='row-content align-items-center'>
                <Col>
                    <a
                        role='button'
                        className='btn btn-link text-black'
                        href='tel:+19478861318'
                    >
                        <i className='fa fa-phone' /> 1-947-886-1318
                    </a>
                    <br />
                    <a
                        role='button'
                        className='btn btn-link text-black'
                        href='mailto:kelsey.moussa@gmail.com'
                    >
                        <i className='fa fa-envelope-o' /> kelsey.moussa@gmail.com
                    </a>
                </Col>
            </Row>
            
            <Row className='row-content'>
                <Col xs='12'>
                    <h2>Send Me A Message</h2>
                    <hr />
                </Col>
                <Col md='10'>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;