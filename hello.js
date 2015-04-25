Providers = new Mongo.Collection("providers");
Router.route('/', {name: 'homePage'});
Router.route('/hospitalOption', {name: 'hospitalOption'});
Router.route('/socialServiceOption', {name: 'socialServiceOption'});

if (Meteor.isClient) {
    Template.homePage.events({
        'click #hospital': function () {
            Router.go('/hospitalOption');
        },
        'click #clinic': function () {
            Router.go('/hospitalOption');
        },
        'click #senior-social': function () {
            Router.go('/socialServiceOption');
        },
        'click .glyphicon-arrow-left': function(){
            Router.go('/');
        }
    });
    Template.hospitalOption.events({
        'click .glyphicon-arrow-left': function(){
            Router.go('/');
        },
        'click .glyphicon-arrow-right': function(){
            Router.go('/');
        }
    });
    Template.socialServiceOption.events({
        'click .glyphicon-arrow-left': function(){
            Router.go('/');
        },
        'click .glyphicon-arrow-right': function(){
            Router.go('/');
        }
    });


}

if (Meteor.isServer) {
  Meteor.startup(function () {
      if (Providers.find().count() === 0) {
          console.log("importing nets-sales.json to mongodb");

          var data = JSON.parse(Assets.getText("provider.json"));

          data.forEach(function (item, index, array) {
              Providers.insert(item);
          });
      }
  });
}

