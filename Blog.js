var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var BlogSchema = new Schema({
    
		id: {
			type: 'Number'
		},
		date: {
			type: 'Date'
		},
		date_gmt: {
			type: 'Date'
		},
		guid: {
			rendered: {
				type: 'String'
			}
		},
		modified: {
			type: 'Date'
		},
		modified_gmt: {
			type: 'Date'
		},
		slug: {
			type: 'String'
		},
		status: {
			type: 'String'
		},
		type: {
			type: 'String'
		},
		link: {
			type: 'String'
		},
		title: {
			rendered: {
				type: 'String'
			}
		},
		
		excerpt: {
			rendered: {
				type: 'String'
			},
			protected: {
				type: 'Boolean'
			}
		},
		
        author: {
			type: 'Number'
		},
		featured_media: {
			type: 'Number'
		},
		comment_status: {
			type: 'String'
		},
		ping_status: {
			type: 'String'
		},
		sticky: {
			type: 'Boolean'
		},
		template: {
			type: 'String'
		},
		format: {
			type: 'String'
		},
		meta: {
			type: 'Array'
		},
		categories: {
			type: [
				'Number'
			]
		},
		tags: {
			type: 'Array'
		},
		_links: 
		{
			self: {
				type: [
					'Mixed'
				]
			},
			collection: {
				type: [
					'Mixed'
				]
			},
			about: {
				type: [
					'Mixed'
				]
			},
			author: {
				type: [
					'Mixed'
				]
			},
			replies: {
				type: [
					'Mixed'
				]
			},
			'version-history': {
				type: [
					'Mixed'
				]
			},
			'wp:attachment': {
				type: [
					'Mixed'
				]
			},
			'wp:term': {
				type: [
					'Mixed'
				]
			},
			curies: {
				type: [
					'Mixed'
				]
			}
		}	
		});

module.exports = mongoose.model('Blog', BlogSchema);