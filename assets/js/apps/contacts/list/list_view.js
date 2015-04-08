ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _) {
  List.Contact = Marionette.ItemView.extend({
    tagName: 'tr',
    template: '#contact-template',
    events: {
      'click': 'highlightName',
      'click': 'alertPhoneNumber',
      'click button.js-delete': 'deleteClicked',
      'click a.js-show': 'showClicked'
    },

    highlightName: function(e) {
      e.preventDefault();
      this.$el.toggleClass('warning');
    },

    alertPhoneNumber: function(e) {
      console.log($(e.target).text());
      // alert(this.model.escape('firstName') + ' phone number: ' + this.model.escape('phoneNumber'));
    },

    deleteClicked: function(e) {
      e.stopPropagation();
      // this.model.collection.remove(this.model);
      this.trigger('contact:delete', this.model);
    },

    showClicked: function(e) {
      e.preventDefault();
      e.stopPropagation();
      this.trigger('contact:show', this.model);
    }
  });

  List.Contacts = Marionette.CompositeView.extend({
    tagName: 'table',
    className: 'table table-hover',
    template: '#contact-list',
    childView: List.Contact,
    childViewContainer: 'tbody'
  });

});
