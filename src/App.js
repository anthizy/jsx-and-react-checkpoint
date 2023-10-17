import React from 'react';
import Name from './name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import product from './product';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const firstName = "Nathan";

function App() {
  return (
    <div className="App">
      <Card style={{ width: '18rem', margin: 'auto', marginTop: '50px' }}>
        <Card.Body>
          <Image imageUrl={product.imageUrl} />
          <Name productName={product.name} />
          <Price productPrice={product.price} />
          <Description productDescription={product.description} />
        </Card.Body>
      </Card>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>Hello, {firstName ? firstName : "there!"}</p>
        {firstName && <img src={product.imageUrl} alt="Profile" style={{ width: '100px', height: '100px' }} />}
      </div>
    </div>
  );
}

export default App;
