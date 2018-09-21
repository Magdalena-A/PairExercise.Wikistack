const express = require('express');
const router = express.Router();
const views = require('../views');
const { Page } = require("../models");

router.get('/', (req, res, next) => {
  res.send('Hello!')
});

router.get('/add', (req, res, next) => {
  res.send(views.addPage());
});

router.post('/', async (req, res, next) => {
  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`
  const page = new Page({
    title: req.body.title,
    content: req.body.content,
  });
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    console.log(page);
    res.redirect('/');
  } catch (error) { next(error) }
});

router.get('/:slug', async (req, res) => {
  const currentPage = await Page.findOne({
    where: {slug: req.params.slug}
  })
  console.log(currentPage);
  res.json(currentPage);
});

module.exports = router;
