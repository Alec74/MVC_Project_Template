const fs = require('fs');

const controllerIndex = () => 
`const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
`;

const homeRoutes = () => 
`const router = require('express').Router();
const { Message } = require('../models');
const { QueryTypes } = require('sequelize');
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  res.render('homepage', {
    logged_in: req.session.logged_in
  })
})
router.get('/page1', async (req, res) => {
  try {
    // sequelize model used to findAll messages
    const allMessages = await Message.findAll();
    const messages = allMessages.map((message) => message.get({plain: true}));

    res.render('page1', {
      messages,
      logged_in: req.session.logged_in
    })
  } catch {
    res.status(500);
  }
  
})
router.get('/page2', async (req, res) => {
  res.render('page2',{
    logged_in: req.session.logged_in
  })
})

router.get('/page3', withAuth, async (req, res) => {
    try {
        res.render('page3', {
            // Pass the logged in flag to the template
            logged_in: req.session.logged_in
          })
    } catch (err) {
        res.status(500).json(err);
    }
    
})

router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;
`;

const userRoutes = () => 
`const router = require('express').Router();
const { User } = require('../../models');


router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
`;

const messageRoutes = () => 
`const router = require('express').Router();
const { Message } = require('../../models');
const fs = require('fs');


//GET all messages from db
router.get('/', (req, res) => {
    //get all content from table
    Message.findAll().then((content) => {
        // console.log(content);
        res.json(content);
    })
})


module.exports = router;
`;

const apiIndex = () => 
`const router = require('express').Router();

const userRoutes = require('./userRoutes');
const messageRoutes = require('./messageRoutes');

router.use('/users', userRoutes);
router.use('/message', messageRoutes)

module.exports = router;
`;

module.exports = { controllerIndex, homeRoutes, userRoutes, messageRoutes, apiIndex };