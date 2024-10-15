import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Land() {
  return (
    <>
    <Container className='d-flex justify-content-center my-5 mx-4'>
      <Row className='mt-5'>


        <Col md={6}>
        <h2>Welcome to <span className='text-warning'>Media Player</span></h2>
        <p style={{textAlign:'justify'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quia doloremque amet officia rem eveniet exercitationem voluptatibus cupiditate a asperiores eligendi placeat, recusandae facilis animi id neque, labore necessitatibus reprehenderit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis odio maiores magnam voluptatum suscipit assumenda doloremque animi ullam, ratione eos laborum autem quia quis corporis, tempore obcaecati accusamus molestiae asperiores!
        </p>
        <Link to={'/home'} style={{textDecoration:'none'}}> <button className='btn btn-warning'>
          Get Started
        </button></Link>
       
        </Col>
        <Col md={1}></Col>
        <Col md={5}>
        <img src="https://e0.pxfuel.com/wallpapers/151/590/desktop-wallpaper-eq-bass-music.jpg" alt="no image" width={'95%'} className='mt-3'/>
        
        </Col>
        
      </Row>
      
     
    </Container>
    <Container>
    <Row>
        <h2 className='text-center'>Features</h2>
        <Col md={2}></Col>
        <Col md={8}>
        <Row className='mt-5 d-flex justify-content-center align-items-center'>
          <Col md={4} className='p-3' >

          <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>  

          </Col>

          
          <Col md={4} className='p-3'>
          
          <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/88/4a/40/884a408310b28171aa1018f77dee2602.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
          
          </Col>

          
          <Col md={4} className='p-3' >

          <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/62/0c/5a/620c5a819f8b8fa2a75575edf1d155ec.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
          </Col>

       


        </Row>
        </Col>
        <Col md={2}></Col>

      </Row>
    </Container>
    <div className="container">
      <div className="row p-5">
        <div className="col border border-secondary border2 p-5">
          <div className="row">
            <div className="col-md-6"> 
              <h2 className='text-warning'>Simply fast and powerful</h2>
              <p><span className='fs-4'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor repudiandae mollitia eveniet odit laborum ratione deleniti tempore ipsum autem sapiente! Quisquam perspiciatis porro velit magnam est similique facilis nostrum accusamus.</p>
              <p><span className='fs-4'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor repudiandae mollitia eveniet odit laborum ratione deleniti tempore ipsum autem sapiente! Quisquam perspiciatis porro velit magnam est similique facilis nostrum accusamus.</p>
              <p><span className='fs-4'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor repudiandae mollitia eveniet odit laborum ratione deleniti tempore ipsum autem sapiente! Quisquam perspiciatis porro velit magnam est similique facilis nostrum accusamus.</p>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
            <iframe  width="100%" height="380" src="https://www.youtube.com/embed/T2fjQrsKbAM?autoplay=1" title="BoyWithUke - Understand" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Land