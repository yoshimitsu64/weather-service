import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: null | string;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error: error.toString() });
    console.error(errorInfo.componentStack);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Error: {this.state.error}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
