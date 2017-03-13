const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const config = require('./config.js');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.secret
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('./public'));

///DATABASE////

///put here///
passport.use(new Auth0Strategy({
  domain: config.authConfig.domain,
  clientID: config.authConfig.clientID,
  clientSecret: config.authConfig.clientSecret,
  callbackURL: '/auth/callback'
},
function(accessToken, refreshToken, extraParams, profile, done) {
  console.log(profile);
  return done(null, profile);
}));
passport.serializeUser(function(user, done) {
  console.log('serializing', user)
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});



app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback',
passport.authenticate('auth0', {successRedirect: '/#/items'}), function(req,res) {
  res.status(200).send(req.user);
})
app.get('/auth/me', function(req, res) {
  if(!req.user) return res.sendStatus(404);

  res.status(200).send(req.user);
})

app.get('/auth/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})

app.listen(4000, function() {
  console.log('Connected on 4000')
})
