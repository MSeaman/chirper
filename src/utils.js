var crypto = require('crypto');

//enables gravatar to grab avatars from the user's email

exports.avatar = function (email) {
    if (!email) return '';

    email = crypto.createHash('md5').update(email).digest('hex');
    
    return 'http://www.gravatar.com/avatar/' + email + '?s=90';
};