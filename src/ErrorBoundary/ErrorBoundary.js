import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: '',
  }

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error,
    });
  }

  render() {
    const { hasError, errorMessage } = this.state;
    const { children } = this.props;
    
    if (hasError) {
      return errorMessage;
    }
    return children;
  }
}

export default ErrorBoundary;
