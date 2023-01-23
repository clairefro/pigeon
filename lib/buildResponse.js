const buildResponse = (data, errMsg = "Something went wrong") => {
  const requestedAt = new Date().toISOString();
  if (data) {
    return { status: "ok", requestedAt, data };
  } else {
    return { status: "error", requestedAt, message: errMsg };
  }
};

module.exports = { buildResponse };
