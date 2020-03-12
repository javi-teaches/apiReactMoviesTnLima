module.exports = (sequelize, dataTypes) => {
	const movie = sequelize.define('movies', {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		title: dataTypes.STRING,
		overview: dataTypes.STRING,
		vote_average: dataTypes.DECIMAL,
		release_date: dataTypes.DATE,
		original_language: dataTypes.STRING,
		poster: dataTypes.STRING,
	});

	return movie;
}