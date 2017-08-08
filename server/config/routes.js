const peoples = require('./../controllers/peoples.js')

module.exports = (app) => {
  app.get('/', peoples.index)
  app.get('/new/:name/', peoples.new)
  app.get('/remove/:name/', peoples.remove)
  app.get('/:name', peoples.name)
}
