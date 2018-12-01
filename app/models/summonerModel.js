var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var summonerSchema = new Schema({
    id: String,
    region: String,
    level: String,
    matchHistory: {
        match_id: String,
        champion_id: String,
        map_id: String
    }
});

var Summoners = mongoose.model('Summoners', summonerSchema);

module.exports = Summoners;