import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop, ModalBody } from './Modal.styles';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    onCloses: PropTypes.func.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = event => {
    // закрив по Escspe
    if (event.code === 'Escape') {
      this.props.onCloses();
    }
  };
  handleBackDropClick = event => {
    // закрив по бекдроп
    if (event.target === event.currentTarget) {
      this.props.onCloses();
    }
  };
  render() {
    return createPortal(
      <Backdrop onClick={this.handleBackDropClick}>
        <ModalBody>{this.props.children}</ModalBody>
      </Backdrop>,
      modalRoot
    );
  }
}
