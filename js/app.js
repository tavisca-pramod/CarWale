App = Ember.Application.create({
	LOG_TRANSITIONS: true	
});

App.Router.map(function() {
  this.route("rent", { path: "/rent" });
  this.route("sell", { path: "/sell" });
  this.route("buy", { path: "/buy" });
  this.route("checkprice", { path: "/checkprice" });
  this.route("book", { path: "/rent/book" });
  this.route("tarifs", { path: "rent/tarifs" });
  this.route("new", { path: "/buy/new" });
  this.route("used", { path: "/buy/checkprice" });
});

//index
App.IndexRoute = Ember.Route.extend({
	model : function(){
		return { content : 'Car wale'};
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
		return { content : 'Rent a car'};
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
		return { content : 'Sell a car'};
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
		return { content : 'Buy new/old cars'};
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
		return { content : 'Check market price'};
	}
});

App.CheckpriceView = Ember.View.extend({
	didInsertElement : function(){}
});

App.CheckpriceController = Ember.ObjectController.extend({
	actions: {}
});

//book a car

App.BookRoute = Ember.Route.extend({
	model : function(){
		return { content : 'Book car'};
	}
});

App.BookView = Ember.View.extend({
	didInsertElement : function(){}
});

App.BookController = Ember.ObjectController.extend({
	actions: {}
});

//tarifs

App.TarifsRoute = Ember.Route.extend({
	model : function(){
		return { content : 'Tarif plans'};
	}
});

App.TarifsView = Ember.View.extend({
	didInsertElement : function(){}
});

App.TarifsController = Ember.ObjectController.extend({
	actions: {}
});

//new car

App.NewRoute = Ember.Route.extend({
	model : function(){
		return { content : 'Buy new car'};
	}
});

App.NewView = Ember.View.extend({
	didInsertElement : function(){}
});

App.NewController = Ember.ObjectController.extend({
	actions: {}
});

//Used car

App.UsedRoute = Ember.Route.extend({
	model : function(){
		return { content : 'Buy Used cars'};
	}
});

App.UsedView = Ember.View.extend({
	didInsertElement : function(){}
});

App.UsedController = Ember.ObjectController.extend({
	actions: {}
});