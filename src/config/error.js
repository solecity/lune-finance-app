import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends PureComponent {
  state = { error: null, info: null };

  static propTypes = {
    children: PropTypes.node.isRequired
  };

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    const { children } = this.props;
    const { error, info } = this.state;

    if (error !== null) {
      return (
        <div style={{ padding: 8 }}>
          <h1>Oops, something went wrong :(</h1>
          <pre>The error: {error.toString()}</pre>
          <pre>Where it occured: {info.componentStack}</pre>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
