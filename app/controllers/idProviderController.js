// const { buildUrl, search: searchRoutes } = require('../routes/definitions');

const initIdProviders = function initIdProvider(services) {
  return async (req, res) => {
    try {
      const requester = req.params.userId;
      const id = await services.idProvider.provideId(requester);

      const json = {
        code: 200,
        name: 'Success',
        message: 'Request is fulfilled',
        data: id
      };

      return res.status(200).json(json);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ code: 500, name: 'InternalError', message: err.message });
    }
  };
};

module.exports = function init(services) {
  return {
    provideId: initIdProviders(services),
  };
};
