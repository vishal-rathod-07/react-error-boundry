import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null, errorInfo: null };

  // update state so the next render will show the fallback UI.
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  // log the error to an error reporting service.
  componentDidCatch(error, errorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{this.state.error.toString()}</p>
          <p>{this.state.errorInfo?.componentStack}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.displayName = 'ErrorBoundary';

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
