'use strict';

albasoftApp.factory('apropoService', 
    
    function ($http, $q) {

            var factory = {

                propos :false,
                getPropos : function () {
                    var  deferred = $q.defer();
                    if (factory.propos !== false) {
                        deferred.resolve(factory.propos);
                    }
                    else {
                        console.log('hello');
                        $http.get('js/datas/apropos.json')
                            .then(function (response, status) {
                                factory.propos = response.data;
                                deferred.resolve(factory.propos);
                            },(function (data, status) {
                                deferred.reject('impossible de recuperer les donnees')
                            }));
                    }
                    return deferred.promise ;
                }
            };
        return factory;
    
});