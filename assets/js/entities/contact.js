ContactManager.module('Entities', function(Entities, ContactManager, Backbone, Marionette, $, _) {
  Entities.Contact = Backbone.Model.extend({
    defaults: {
      firstName: '',
      lastName: '',
      phoneNumber: ''
    }
  });

  Entities.ContactCollection = Backbone.Collection.extend({
    model: Entities.Contact,

    comparator: 'firstName'
  });

  var contacts;

  var initializeContacts = function() {
    contacts = new Entities.ContactCollection([
      { id: 1, firstName: 'Bob', lastName: 'Brigham', phoneNumber: '123-4321' },
      { id: 2, firstName: 'Alice', lastName: 'Arten', phoneNumber: '123-4321' },
      { id: 3, firstName: 'Charlie', lastName: 'Campbell', phoneNumber: '858-3212' }
    ]);
  };

  var API = {
    getContactEntities: function() {
      if (contacts === undefined) {
        initializeContacts();
      }
      return contacts;
    }
  };

  ContactManager.reqres.setHandler('contact:entities', function() {
    return API.getContactEntities();
  });


});
