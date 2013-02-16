var HomeView = function(store) {
 
    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('click', '#shuffle-btn', this.findByList);
    };

    this.findByList = function() {
        var self = this;
        store.findByListAndHandness($('#list-filter').val(), $('#hardness-filter').val(), function(words) {
            $('.words-list').html(HomeView.liTemplate(words.sort(function() { return 0.5 - Math.random();})));
        });
    }

    this.render = function() {
    	this.el.html(HomeView.template());
    	return this;
    };
 
    this.initialize();
 
}
 
HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.liTemplate = Handlebars.compile($("#words-li-tpl").html());
