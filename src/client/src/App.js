import React from 'react';

// Components
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from './components/Navbar';

function App () {
  return (
	  <Container className="my-5">
	  	<Row>
	  		<Col sm={4}>
				<Button variant="primary">Soy un botón</Button>
			</Col>
			<Col sm={4}>
				<Button variant="success">Soy un botón</Button>
			</Col>
			<Col sm={4}>
				<Button variant="warning">Soy un botón</Button>
			</Col>
	  	</Row>
		<Navbar
			title='Mi barra de navegación'
			links={
				[
					{url: '/home', txt: 'Home'},
					{url: '/about', txt: 'About Us'},
					{url: '/movies', txt: 'Movies'},
					{url: '/series', txt: 'Series'},
					{url: '/contact', txt: 'Contact Us'},
				]
			}
		/>

		<Navbar />
	  </Container>
  );
}

export default App;