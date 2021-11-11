class ApiError extends Error {
  constructor(status, error, stack) {
    super(error);
    this.status = status;
    this.error = error;
    this.stack = stack;
  }
}

module.exports = ApiError;
