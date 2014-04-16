$(document).ready(function() {
  function WebmailViewModel() {
    var self = this;

    self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
    self.chosenFolderId = ko.observable();
    self.chosenFolderData = ko.observable();
    self.chosenMailData = ko.observable();

    // Behaviours
    self.goToFolder = function (folder) {
      location.hash = folder;
    };

    self.goToMail = function (mail) {
      location.hash = mail.folder + '/' + mail.id;
    };

    Sammy(function () {
      this.get('/tutorial3#:folder', function () {
        self.chosenFolderId(this.params.folder);
        self.chosenMailData(null);
        $.get('/mail', { folder: this.params.folder}, self.chosenFolderData);
      });

      this.get('/tutorial3#:folder/:mailId', function () {
        self.chosenFolderId(this.params.folder);
        self.chosenFolderData(null);
        $.get('/mail', { mailId: this.params.mailId }, self.chosenMailData);
      });

      this.get('/tutorial3', function () { 
        location.hash = '#Inbox';
      });
    }).run();
  }

  ko.applyBindings(new WebmailViewModel());
});
