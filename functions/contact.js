require('dotenv').config();

exports.handler = (event, _context, callback) => {
  const data = JSON.parse(event.body);
  const email = {
    from: 'Ashish Shetty <ashishshetty777@gmail.com>',
    data,
    apiKey: process.env.MAIL_API_KEY,
    apiDomain: process.env.MAIL_DOMAIN,
  };

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(email),
  });
};
