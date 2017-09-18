const { buildUrl, search: searchRoutes } = require('../routes/definitions');

const initIdProviders = function initIdProvider(services) {
  return async (req, res) => {
    // try {
    //   const userId = req.params.userId;
    //   const searchText = req.query.searchText || '';
    //   const offset = +req.query.nextOffset || 0;

    //   // Get 1 more than limit value to check if next-able
    //   const contributors =
    //     await services.search.searchContributors(userId, searchText, limit + 1, offset);
    //   const json = {
    //     code: 200,
    //     name: 'Success',
    //     message: 'Request is fulfilled',
    //     data: contributors,
    //     links: {}
    //   };

    //   if (contributors.length > limit) {
    //     const url = buildUrl(searchRoutes.contributors, { userId });

    //     contributors.pop(); // Remove the extra 1
    //     json._next = `${url}?searchText=${searchText}&nextOffset=${offset + limit}`;
    //   }

    //   return res.status(200).json(json);
    // } catch (err) {
    //   console.log(err);
    //   return res.status(500).json({ code: 500, name: 'InternalError', message: err.message });
    // }
  };
};

module.exports = function init(services) {
  return {
    idProviders: initIdProviders(services),
  };
};