function secureRoute(req, res, next) {
  if(!req.session.isAuthenticated || !req.session.userId) {
    return req.session.regenerate(() => res.unauhorized());
  }
  next();
}

module.exports = secureRoute;
