var all_labels =
 { "Inbox"   :
   [
       {
           "id": 1,
           "from": "Abbot <oliver@smoke-stage.xyz>",
           "to": "steve@example.com",
           "date": "May 25, 2011",
           "subject": "Booking confirmation #389629244",
           "messageContent": "Hi!<br/><br/>Schwebet und ernsten zu ich träne diesmal schatten ich folgenden erste seh jenem und irrt was menge dunst herauf. Jenem meinem die mich bang jenem den lebens das busen verklungen fühlt folgenden. Stunden folgenden um nach widerklang strenge ein welt ich euch alten der um nun erfreuet gedränge. Festzuhalten bilder mich ihr jenem mit verklungen auf euch wird selbst des noch weich an des. Tränen um sehnen gleich das stunden irrt einst ertönt besitze ein und liebe wohl noch manche und hinweggeschwunden ertönt.<br/><br/>Lied lieb zauberhauch erste die steigen fühlt mich liebe halbverklungnen zu selbst liebe glück. Mir es fühlt hinweggeschwunden schwebet nun euch glück auf irrt neu weiten fühlt und jenem bringt lebens versuch. Erste folgenden ich walten wird euren sang nicht lebt mit es steigt widerklang tönen nun busen.<br/><br/>Gesänge zu nun hinweggeschwunden vom mich fühlt träne blick kommt zu. Um wohl es freundliche denen geneigt wird. Menge hören zauberhauch vom ertönt wiederholt mich die nicht jenem euch ein.<br/><br/>Widerklang der lebens der zug träne selbst sich bilder alten strenge zerstoben zauberhauch die um. Ertönt versuch erfreuet und. Ein wieder zerstreuet zerstoben folgt ich herzen der kommt ihr mein sich ersten gedränge.<br/><br/>Best regards - Jonas",
           "folder": "inbox"
       }
   ],
   "Archive" :
   [
       {
           "id": 13,
           "from": "adele.guyuson@hat-chicken6.xyz",
           "to": "steve@example.com",
           "date": "May 2, 2011",
           "subject": "RE: Reservation confirmation #999331516",
           "messageContent": "Hi Laith,<br/>At et eros.<br/><br/>Eu no dolore et ea vero dolore luptatum tempor sit ipsum labore dolor elitr. Eirmod clita facilisis et velit justo eos eos. Dolor gubergren vero rebum elitr sit sit ipsum ut no rebum et.<br/><br/>Exerci diam ut vel ut. Dolor stet amet volutpat autem invidunt duis et enim vel ipsum eirmod sadipscing dolore sadipscing.<br/><br/>Cheers - Ori Hupe",
           "folder": "archive"
       }
   ],
   "Sent"    :
   [
       {
           "id": 33,
           "from": "steve@example.com",
           "to": "callum.wyeslyfa@fang ghost.xyz",
           "date": "May 13, 2011",
           "subject": "RE: Logo ideas",
           "messageContent": "Jada!<br/><br/>Navrantes l'alcool je sans hippocampes des. Et circulation a soir cotons lâche ont marais les et - ma papillon sur les troupeaux inouies victimes. Poteaux navrantes coup de suivi les que tendus tapages les lune ce aux l'autre.<br/><br/>Délires les - verte sans bas ventouses sais lunules dans aux poissons d'azur choient des les la. Tempete rouleurs des. Le enfant criards a.<br/><br/>Cataractant faisaient parfois tu mais bleues démarrées j'ai montant et verts. Vu houle le fermenter dans sous hanses bonaces je l'ouragan je sapin quelque et bateau. Sapin noire quille nuits ses délirants triomphants milieu pénétra des serpents et fientes victimes des enfants léviathan. Entonnoirs moi chanteurs instants libre tristesses ce. Ces regrette que que arbres me future plus.<br/><br/>Florides monté descendre péninsules nasses soir. J'ai d'oiseaux arcs-en-ciel papillon. Faisaient anses de bateau aux les bleme des mes d'astres ne des j'ai l'amour courants mes des. Hideux toute jaune mer du j'ai sans. Colombes maries ressacs en ces.<br/><br/>That's all - Marny Humoford",
           "folder": "sent"
       }
   ],
   "Spam"    :
   [
       {
           "id": 44,
           "from": "Vance <signe64@wilderness.xyz>",
           "to": "steve@example.com",
           "date": "May 4, 2011",
           "subject": "@@ Meet new friends online @@",
           "messageContent": "Hello...<br/><br/>Fond querelles léger guidé. Sidéraux flots je dans subi. D'eau plein dors je navrantes cloués dont j'ai du l'orgueil criards geindre et. Amer aubes folle cloués délirants. Des crépuscule du île fermentent et d'eau trombes aux lieues l'horizon est ces presque je des fleurs ameres les.<br/><br/>Cheers<br/>Mara Huquford",
           "folder": "spam"
       }
   ]
 };

$(document).ready(function() {
  function WebmailViewModel() {
    // Data
    var self = this;
    self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
    self.chosenFolderId = ko.observable();
    self.chosenFolderData = ko.observable();

    self.mails = this.all_labels;

    // Behaviours
    self.goToFolder = function(folder) {
      self.chosenFolderId(folder);
      $.get('/mail', { folder: folder }, self.chosenFolderData);
    };
  }

  // Show inbox by default
  self.goToFolder('Inbox');

  ko.applyBindings(new WebmailViewModel());
});
