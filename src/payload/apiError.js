class ApiError {
  constructor(status, error, stack) {
      this.status = status;
      this.error = error;
      this.stack = stack;
  }
}

module.exports = ApiError