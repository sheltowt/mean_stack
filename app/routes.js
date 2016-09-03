var path = require('path');
var Tasks = require('./models/Tasks')

module.exports = function(app) {

	api_root = "/api/v1.0"

	app.get(api_root+'/tasks', function(req, res){
		console.log("hitting this route")
		Tasks.find(function(err, tasks) {
			console.log(err)
			console.log(tasks)
			return res.send({"works": "bla"})
		})
	})

	app.get('*', function(req, res){
		res.sendFile(path.resolve(__dirname+'/../public/index.html'))
	})

}