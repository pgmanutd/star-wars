class CustomGraphQLError extends Error {
  constructor(message, code) {
    super(message);

    this.extensions = {
      code,
      exceptions: {
        stack: this.stack,
      },
    };
  }
}

export default CustomGraphQLError;
