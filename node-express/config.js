const config = {
  application: {
    cors: {
      server: [
        {
          origin: "localhost:8000",
          credentials: true,
        },
      ],
    },
  },
};
module.exports = { config };
