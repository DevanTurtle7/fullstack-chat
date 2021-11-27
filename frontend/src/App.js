import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { Row, Container } from 'reactstrap';
import { Component } from 'react';

const API_URL = 'http://127.0.0.1:5000'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: null,
    }

    console.log(this.getChats(1))

  }

  getChats = (user_id) => {
    let route = `/chats?user_id=${user_id}`
    fetch(API_URL + route, {
      method: 'GET',
    }).then(response => response.json())
      .then(response => {
        console.log(response)
      });
  }

  render() {
    return (
      <div className="App">
        <Container fluid>
          <Row className="row-height">
            <Sidebar />
            <Chat />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
