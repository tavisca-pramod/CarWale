App = Ember.Application.create({
	LOG_TRANSITIONS: true	
});

App.Router.map(function() {
  this.route("rent", { path: "/rent" });
  this.route("sell", { path: "/sell" });
  this.route("buy", { path: "/buy" });
  this.route("checkprice", { path: "/checkprice" });
});

//index
App.IndexRoute = Ember.Route.extend({
	model : function(){
		return { content : 'index'};
	}
});

App.IndexView = Ember.View.extend({
	didInsertElement : function(){}
});

App.IndexController = Ember.ObjectController.extend({
	actions: {}
});

//rent

App.RentRoute = Ember.Route.extend({
	model : function(){
		return { content : 'Rent'};
	}
});

App.RentView = Ember.View.extend({
	didInsertElement : function(){}
});

App.RentController = Ember.ObjectController.extend({
	actions: {}
});

//sell

App.SellRoute = Ember.Route.extend({
	model : function(){
		return { content : 'Sell'};
	}
});

App.SellView = Ember.View.extend({
	didInsertElement : function(){}
});

App.SellController = Ember.ObjectController.extend({
	actions: {}
});

//Buy

App.BuyRoute = Ember.Route.extend({
	model : function(){
		return { content : 'Buy'};
	}
});

App.BuyView = Ember.View.extend({
	didInsertElement : function(){}
});

App.BuyController = Ember.ObjectController.extend({
	actions: {}
});

//CheckPrice

App.CheckpriceRoute = Ember.Route.extend({
	model : function(){
		return { content : 'Checkprice'};
	}
});

App.CheckpriceView = Ember.View.extend({
	didInsertElement : function(){}
});

App.CheckpriceController = Ember.ObjectController.extend({
	actions: {}
});