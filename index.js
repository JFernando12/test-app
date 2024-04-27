module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Deb Test 1",
        input: event,
      },
      null,
      2
    ),
  };
};
