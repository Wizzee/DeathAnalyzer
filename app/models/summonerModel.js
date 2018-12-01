var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var summonerSchema = new Schema({
    id: String,
    accountID: String,
    profileIconId: Number,
    name: String,
    puuid: String,
    summonerLevel: Number,
    revisionDate: Date,
    region: String,
    matchHistory: {
        match_id: String,
        champion_id: String,
        map_id: String
    }
});

var Summoners = mongoose.model('Summoners', summonerSchema);

module.exports = Summoners;