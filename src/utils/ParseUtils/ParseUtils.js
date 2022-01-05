class ParseUtils {
  static parseData(result) {
    return result?.data?.data || result?.data?.response?.results || [];
  }

  static parseError(error) {
    return {
      status: error?.response?.data?.statusCode || 500,
      message: error?.response?.data?.message || 'Something went wrong...',
    };
  }
}

export { ParseUtils };
