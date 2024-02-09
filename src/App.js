import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { Container, Row ,Col,Card,Button} from 'react-bootstrap';
import { blog } from './Data/blog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function App() {
  let headerInfo={
    email:"ws@gmail.com",
    phone:"7026564639"
  }
  return (
    <div className="App">
      <Header 
      headerInfo={headerInfo} cname="Revolusys">
        <h1>welcom Suhail</h1>
        <FontAwesomeIcon icon={faWhatsapp}/>
      </Header>
        {/* <Container fluid>
          <Container>
              <Row> 
                <Col className='col-12 text-center py-4'>
                  <h1>Our Course</h1>
                </Col>
              </Row>
              <Row>
                <Col lg='3' md='6'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>

                </Col>
                <Col lg='3' md='6'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg='3' md='6'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg='3' md='6'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
          </Container>
        </Container> */}
        <Container>
          <Row>
            { blog.map((v,i)=>{
              return(
                <ProductItems pitems={v} key={i}/>
              )
            })}
            
            
            
          </Row>
        </Container>

    </div>
  );
}

export default App;

function ProductItems({pitems}){
  return(
    <Col className="col-lg-3 mb-4">
      <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{pitems.name} </Card.Title>
                      <Card.Text>
                        {pitems.body}
                        
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
      </Card>              
    </Col>
  )
}
