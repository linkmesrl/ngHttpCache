'use strict';

// TODO find a way to clear the cache for one route only

angular.module('ngHttpCache', [])
.provider('ngHttpCacheConfig', function() {

    this.urls = ['/api'];

    var _this = this;

    this.$get = function() {
        return {
            urls: _this.urls
        };
    };

})
.config(function($httpProvider){
    $httpProvider.interceptors.push('lbInterceptor');
})
.factory('httpCache', function($cacheFactory){
    var httpCache = $cacheFactory('httpCache');
    return httpCache;
})
.factory('lbInterceptor', function($cacheFactory, httpCache, ngHttpCacheConfig){
    return {
        request: function(config){

            var shouldCache = ngHttpCacheConfig.urls.reduce(function(should, url){
                if(config.url.indexOf(url) > -1){
                    return true;
                }
                return should;
            }, false);

            if(shouldCache){
                config.cache = httpCache;
                // the cache will be stored in `httpCache.get(config.url)`
            }
            return config;
        }
    };
});

angular.module('ngHttpCache')
.config(function(ngHttpCacheConfigProvider){
    ngHttpCacheConfigProvider.urls = ['/api', '/templates'];
});
