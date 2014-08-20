'use strict';

angular.module('fanstasyApp.services.players', ['fanstasyApp.services.firebaseRefs'])
  .factory('Players', ['FBURL', 'Firebase', 'angularFireCollection', 'FireRef',
    function(FBURL, Firebase, angularFireCollection, FireRef) {
      return {
        collection: function() {
          return angularFireCollection(FireRef.players());
        }
      , find: function(playerId) {
        return FireRef.players().child(playerId);
      }
     }
  }])