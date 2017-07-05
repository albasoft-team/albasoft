albasoftApp.factory('temoignageService',

    function ($http, $q) {
        var factory = {
            temoignage :false,
            getTemooignages : function () {
                var  deferred = $q.defer();
                if (factory.temoignage !== false) {
                    deferred.resolve(factory.temoignage);
                }
                else {
                    console.log('hello');
                    $http.get('js/datas/temoignages.json')
                        .then(function (response, status) {
                            factory.temoignage = response.data;
                            deferred.resolve(factory.temoignage);
                        },(function (data, status) {
                            deferred.reject('impossible de recuperer les donnees')
                        }));
                }
                return deferred.promise ;
            }
        };
        return factory;
});