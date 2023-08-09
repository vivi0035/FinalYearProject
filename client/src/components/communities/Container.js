import React, { Component } from 'react';
import { Modal } from './Modal';
import Trigger from './Trigger';
export class Container extends Component {
    state = { isShown: false };
    onSubmit = () => {
        this.closeModal();
        alert('Room proposed successfully');
    };

    showModal = () => {
      this.setState({ isShown: true }, () => {
      this.closeButton.focus();
    });
    this.toggleScrollLock();
    };

    closeModal = () => {
      this.setState({ isShown: false });
      this.Trigger.focus();
      this.toggleScrollLock();
    };
    onKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.closeModal();
      }
     };
    onClickOutside = (event) => {
     if (this.modal && this.modal.contains(event.target)) return;
     this.closeModal();
     };
    toggleScrollLock = () => {
     document.querySelector('html').classList.toggle('scroll-lock');
    };
    render() {
    return (
      <React.Fragment>
      <Trigger
        showModal={this.showModal}
        buttonRef={(n) => (this.Trigger = n)}
        triggerText={this.props.triggerText}
       />
    {this.state.isShown ? (
      <Modal
      onSubmit={this.onSubmit}
      modalRef={(n) => (this.modal = n)}
      buttonRef={(n) => (this.closeButton = n)}
      closeModal={this.closeModal}
      onKeyDown={this.onKeyDown}
      onClickOutside={this.onClickOutside}
      />
    ) : null}
    </React.Fragment>
      );
     }
    }
    export default Container;