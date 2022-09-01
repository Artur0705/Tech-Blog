const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");
const sequelize = require("../config/connection");

router.get("/", withAuth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "text", "title", "created_at"],
    include: [
      {
        model: Comment,
        include: {
          model: User,
          attributes: ["username", "name"],
        },
      },
      {
        model: User,
        attributes: ["username", "name"],
      },
    ],
  })
    .then((data) => {
      const posts = data.map((post) => post.get({ plain: true }));
      res.render("dashboard", { posts, logged_in: req.session.logged_in });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "text", "title", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Comment,
        attributes: ["id", "text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username", "name"],
        },
      },
    ],
  })
    .then((data) => {
      const post = data.get({ plain: true });
      res.render("edit-post", { post, logged_in: req.session.logged_in });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/show/:id", withAuth, (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "text", "title", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Comment,
        attributes: ["id", "text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username", "name"],
        },
      },
    ],
  })
    .then((data) => {
      const post = data.get({ plain: true });
      res.render("single-post", { post, logged_in: req.session.logged_in });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/create-post", (req, res) => {
  res.render("create-post");
});

module.exports = router;
