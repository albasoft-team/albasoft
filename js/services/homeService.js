'use strict';

albasoftApp.factory('homeService',
   function ($http, $q) {
       console.log('service');
       var factory = {
           header : false,
           hbody : false,
           getMenu : function () {
               var  deferred = $q.defer();
               if (factory.header !== false) {
                   deferred.resolve(factory.header);
               }
               else {
                   $http.get('js/datas/menu.json')
                       .then(function (data, status) {
                           console.log('success');
                           factory.header = data;
                           deferred.resolve(factory.header);
                       },(function (data, status) {
                           deferred.reject('impossible de recuperer les donnees')
                       }));
               }
               return deferred.promise ;
           },
           
           getHeaderBody : function () {
               var  deferred = $q.defer();
               if (factory.hbody !== false) {
                   deferred.resolve(factory.hbody);
               }
               else {
                   $http.get('js/datas/page.json')
                       .then(function (data, status) {
                           console.log('success');
                           factory.hbody = data;
                           deferred.resolve(factory.hbody);
                       },(function (data, status) {
                           deferred.reject('impossible de recuperer les donnees')
                       }));
               }
               return deferred.promise ;
           }
       };
       return factory;
   }
);