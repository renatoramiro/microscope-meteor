Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
});

Router.map(function(){
	this.route('postsList', {
		path: '/',
		waitOn: function() { return Meteor.subscribe('posts'); }
	});
});

Router.onBeforeAction('loading');