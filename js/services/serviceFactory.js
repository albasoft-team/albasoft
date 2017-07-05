'use strict';

albasoftApp.factory('serviceFactory',
    function ($http, $q) {
        console.log('service de service');
        var factory = {
            services : false,
            getServices : function () {
                var  deferred = $q.defer();
                if (factory.services !== false) {
                    deferred.resolve(factory.services);
                }
                else {
                    $http.get('js/datas/service.json')
                        .then(function (data, status) {
                            factory.services = data;
                            deferred.resolve(factory.services);
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