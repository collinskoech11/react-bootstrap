import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Alert, Breadcrumb} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Breadcrumb>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="primary">This is a button</Alert>
          <Button>Test Button</Button>
        
      </header>
    </div>
  );
}

export default App;
