const { Post, User, Comment } = require('../models');
const router = require('express').Router();

router.get('/', async (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'text',
            'title',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username', 'name']
                }
            },
            {
                model: User,
                attributes: ['username','name']
            }
        ]
    })
        .then(data => {
            const posts = data.map(post => post.get({ plain: true }));
            res.render('homepage', { posts, logged_in: req.session.logged_in });
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.get('/login', async (req, res) => {
    try {

        res.render('login', {
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/register', async (req, res) => {
    try {
        res.render('signup', {
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;