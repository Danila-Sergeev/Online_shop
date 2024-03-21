class ValidationError extends Error {
  statusCode: number;

  // eslint-disable-next-line no-unused-vars
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
    this.statusCode = 400;
  }
}

export default ValidationError;
