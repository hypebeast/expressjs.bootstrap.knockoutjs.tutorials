$(document).ready(function() {
  function ViewModel() {
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Berlington");

    this.fullName = ko.computed(function(){
      return this.firstName() + " " + this.lastName();
    }, this);

    this.capitalizeLastName = function(){
      var currentVal = this.lastName();
      this.lastName(currentVal.toUpperCase());
    };
  }

  ko.applyBindings(new ViewModel());
});
