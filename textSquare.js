this.Documents = new Mongo.Collection("Documents");

if (Meteor.isClient) {
  // counter starts at 0
  Template.editor.helpers({
      docid:function(){
          console.log("doc id helper: ")
          console.log(Documents.findOne());
          var doc = Documents.findOne();
          if (doc){
              return doc._id;
          } 
          else {
              return undefined;
          }
         
      }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    if (!Documents.findOne()){
        Documents.insert({title:"my new document"});
    }
  });
}
