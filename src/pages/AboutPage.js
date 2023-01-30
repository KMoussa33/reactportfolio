import { Col, Row, Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current='About Me' />
            <Row className='row-content'>
                <Col>
                    <h3>About Me</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna arcu, mollis ac nibh sit amet, tempor tincidunt turpis. Integer dignissim mauris et sem fermentum finibus. Nam mollis consectetur rutrum. Cras semper, tortor vitae accumsan tincidunt, mauris nibh vulputate elit, vitae lacinia eros ante nec augue. Etiam non aliquam leo. Aliquam efficitur nisi vitae elementum viverra. Mauris a dui tempor, elementum urna ut, sollicitudin nisl. Morbi turpis justo, egestas id leo at, varius luctus orci.
                    </p>
                </Col>
            </Row>
        </Container>
    )
};

export default AboutPage;