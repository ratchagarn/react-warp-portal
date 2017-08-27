import React, { Component } from 'react';
import styled from 'styled-components';
import WarpPortal from './WarpPortal';

const originXY = 50;

const Modal = styled.div`
  display: ${props => props.open ? 'block' : 'none'};
  position: absolute;
  top: ${props => props.top ? props.top : originXY + '%'};
  left: ${props => props.left ? props.left : originXY + '%'};
  z-index: 1000;
  padding: 1em;
  background-color: white;
  border: 1px solid lightgrey;
  transform: translateX(-50%) translateY(-50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, .4);
  border-radius: 5px;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false,
    };
  }

  render() {
    const { openModal } = this.state;
    const extraPos = 15;

    return (
      <div className="App">
        <p><button onClick={this.handleOpenModal}>Open Modal</button></p>

        <WarpPortal>
          <Modal open={openModal} top={`${originXY - extraPos}%`} left={`${originXY - extraPos}%`}>
            <button onClick={this.handleCloseModal}>Close Modal</button>
            <h1>Modal - 1</h1>
            <p>Hello world!</p>
          </Modal>
        </WarpPortal>


        <WarpPortal container={document.getElementById('some-where-in-the-dom')}>
          <Modal open={openModal} top={`${originXY + extraPos}%`} left={`${originXY + extraPos}%`}>
            <button onClick={this.handleCloseModal}>Close Modal</button>
            <h1>Modal - 2</h1>
            <p>Hello everybody!</p>
          </Modal>
        </WarpPortal>
      </div>
    );
  }

  handleOpenModal = () => {
    this.setState({ openModal: true });
  }

  handleCloseModal = () => {
    this.setState({ openModal: false });
  }
}

export default App;
