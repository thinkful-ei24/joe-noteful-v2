'use strict';

const knex = require('../knex');

let searchTerm = 'gaga';
knex
  .select('notes.id', 'title', 'content')
  .from('notes')
  .modify(queryBuilder => {
    if (searchTerm) {
      queryBuilder.where('title', 'like', `%${searchTerm}%`);
    }
  })
  .orderBy('notes.id')
  .then(results => {
    console.log(JSON.stringify(results, null, 2));
  })
  .catch(err => {
    console.error(err);
  });

//get by id
knex
  .select('notes.id', 'title', 'content')
  .from('notes')
  .where({notes.id: id})
  .then(results => res.json(results))
  .catch(err => next(err));

//update note by id
knex('notes')
  .update(

  )
  .where({notes.id: id})
  .then(result => res.json(result))
  .catch(err => next(err));

//create new note
knex('notes')
    .insert({})
    .then(results => res.json(results))
    .catch(err => next(err));

//delete note
knex('notes')
    .where({notes.id = id})
    .del()
    .catch(err => next(err));