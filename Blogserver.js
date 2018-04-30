var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var mongoose = require('mongoose');
var Blog = require('./Blog');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8090;
var router = express.Router();
var cron = require('node-cron');


mongoose.connect('mongodb://localhost:27017/blog');

// Middle Route 

router.use(function (req, res, next) {
    // do logging 
    // do authentication 
    console.log('Logging of request will be done here');
    next(); // make sure we go to the next routes and don't stop here
});

cron.schedule('0 */4 * * *', function(){

 /*Insert Function*/
router.route('/blog').post(function (req, res) {
    console.log("in add");
    var p = new Blog();
    p.id = req.body.id
p.date = req.body.date
p.date_gmt = req.body.date_gmt
p.guid = req.body.guid
p.modified = req.body.modified
p.modified_gmt = req.body.modified_gmt
p.slug = req.body.slug
p.status = req.body.status
p.type = req.body.type
p.link = req.body.link
p.title = req.body.title
p.content = req.body.content
p.excerpt = req.body.excerpt
p.author = req.body.author
p.featured_media = req.body.featured_media
p.comment_status = req.body.comment_status
p.ping_status = req.body.ping_status
p.sticky = req.body.sticky
p.template = req.body.template
p.format = req.body.format
p.meta = req.body.meta
p.categories = req.body.categories
p.tags = req.body.tags
p._links = req.body._links
    p.save(function (err) {
        if (err) {
            res.send(err);
        }
        console.log("added");
        res.send({ message: 'Blog Created !' })
	
    })
	
});


/*Get Function*/



router.route('/blog').get(function (req, res) {
    Blog.find(function (err, blog) {
        if (err) {
            res.send(err);
        }
        res.send(blog);
    });
});



/*Update Function*/
router.route('/blog/:id').put(function (req, res) {

    Blog.findById(req.params.id, function (err, blg) {
        if (err) {
            res.send(err);
        }
blg.id = req.body.id
blg.date = req.body.date
blg.date_gmt = req.body.date_gmt
blg.guid = req.body.guid
blg.modified = req.body.modified
blg.modified_gmt = req.body.modified_gmt
blg.slug = req.body.slug
blg.status = req.body.status
blg.type = req.body.type
blg.link = req.body.link
blg.title = req.body.title
blg.content = req.body.content
blg.excerpt = req.body.excerpt
blg.author = req.body.author
blg.featured_media = req.body.featured_media
blg.comment_status = req.body.comment_status
blg.ping_status = req.body.ping_status
blg.sticky = req.body.sticky
blg.template = req.body.template
blg.format = req.body.format
blg.meta = req.body.meta
blg.categories = req.body.categories
blg.tags = req.body.tags
blg._links = req.body._links
        blg.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Blog updated!' });
        });

    });
});


/*Closing Cron Job Here*/
});

/*Delete Function*/
router.route('/blog/:id').delete(function (req, res) {

    Blog.remove({ _id: req.param.id }, function (err, blg) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })

});

app.use(cors());
app.use('/api', router);
app.listen(port);
console.log('REST API is runnning at ' + port);
