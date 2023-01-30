import { Container, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import MyFace from '../app/assets/img/blkwt.jpg'

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <Card>
                <CardImg 
                    width='100%'
                    src={MyFace}
                    alt='black and white AI rendering'
                />
                <CardImgOverlay>
                    <CardTitle>Web Developer in training</CardTitle>
                </CardImgOverlay>
            </Card>
        </Container>
    );
};

export default HomePage;