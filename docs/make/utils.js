const fs = require('fs');

const makeAuth = () => 
`const withAuth = (req, res, next) => {
  // If the user isn't logged in, redirect them to the login route
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
`;

const makeHelpers = () => 
`module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
}
`;

module.exports = {makeAuth, makeHelpers};