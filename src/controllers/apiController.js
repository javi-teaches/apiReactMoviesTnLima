const db = require('../database/models');
const { movies: Movies } = db;

module.exports = {
	index: (req, res) => {
		Movies
			.findAll({
				attributes: {
					exclude: ['createdAt', 'updatedAt'],
				}
			})
			.then(movies => {
				return res.status(200).json({
					total_results: movies.length,
					data: movies
				});
			})
			.catch(error => res.json(error));
	},
	show: (req, res) => {
		Movies
			.findByPk(req.params.id)
			.then(movie => {
				if (movie) {
					return res.status(302).json(movie);
				}
				return res.status(404).json({
					msg: 'Movie not found'
				})
			})
			.catch(error => res.json(error));
	}
}