import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let wrapPortalId = 1;

class WrapPortal extends Component {
  componentDidMount() {
    const { children, container } = this.props;

    const containerNode = document.createElement('div');
    containerNode.id = `wrap-portal-${wrapPortalId}`;

    const target = (
      container && container.nodeType === 1
        ? container
        : document.body
    );
    target.appendChild(containerNode);

    this.container = containerNode;
    this.renderChildren();

    wrapPortalId = wrapPortalId + 1;
  }

  componentDidUpdate() {
    this.renderChildren();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.container);
  }

  render() {
    return null;
  }

  renderChildren() {
    ReactDOM.render(this.props.children, this.container);
  }
}

export default WrapPortal;
