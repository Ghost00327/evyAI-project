import React, { Component, ReactNode } from "react";
import { sentryClient } from "../../Sentry/sentryClient";
import { EvyAILogger } from "../../Utils/EvyAILogger";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // You can log the error to an error reporting service here
    EvyAILogger.error("Error caught in ErrorBoundary:", error, errorInfo);
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "errorBoundary",
        },
      },
    });
  }

  render() {
    // if (this.state.hasError) {
    //   return <h1>Something went wrong.</h1>
    // }

    //@ts-ignore
    return this.props.children;
  }
}

export default ErrorBoundary;
