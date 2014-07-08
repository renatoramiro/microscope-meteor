var postsData = [
	{
		title: 'Introducing Telescope',
		author: 'Sacha Greif',
		url: 'http://sachagreif.com/introducing-telescope/'
	},
	{
		title: 'Meteor',
		author: 'Tom Coleman',
		url: 'http://meteor.com'
	},
	{
		title: 'The Meteor Book',
		author: 'Tom Coleman',
		url: 'http://discovermeteor.com'
	},
	{
		title: 'coddesign',
		author: 'Renato Ramiro',
		url: 'http://coddesign.co'
	},
];

Template.postsList.helpers({
	posts: postsData
});