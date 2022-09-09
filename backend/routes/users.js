const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const newUser = new User({firstname, lastname, email, username, password});
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ') + err)
});
router.route('/:username').get((req, res) => {
  User.find({username:req.params.username})
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:username').post((req, res) => {
  User.findOne({username:req.params.username})
    .then(users => {
      users.firstname = req.body.firstname;
      users.lastname = req.body.lastname;
      users.email = req.body.email;
      users.username = req.body.username;
      users.password = req.body.password;

      users.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;
