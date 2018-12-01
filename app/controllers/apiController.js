var bodyParser = require('body-parser');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded( {extended: true} ));

    // Goes to the specified summoner's profile. If we don't have one, we need to go and get the data from Riot.
    app.get('/api/:region/:id', function(req, res){
        Summoners.find({ region: req.paramas.region, id: req.params.id }, function(err, summoner){

            if (err) {
                // send get request to riot api to get summoner information
            }

            res.send(summoner);

        });
    });

    // Updates the specified summoner's profile
    app.post('/api/:region/:id', function(req, res) {

        if(req.body.id) {
            Summoners.findByIdAndUpdate(req.body.id, {

            }, function(err, summoner){
                if (err) throw err;

                res.send('Success');
            })
        }

    })


}