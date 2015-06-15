#ngHttpCache

Module the enable request caching for your whole app.

## How to use

``` javascript
angular.module('myApp', [
  'ngHttpCache'
]);
```

This will cache all the request that contain `/api` in the url in an `$cacheFactory` object named `httpCache`.

### Configuration

You can configure the route to be cached from you app config providing and array of route that should be matched:

``` javascript
angular.module('myApp')
.config(function(ngHttpCacheConfigProvider){
    ngHttpCacheConfigProvider.urls = ['/api', '/templates'];
});
```

Routes are matched searching for all the provided string in the current url, so:

`/api/members/12` will match `/api`
`/templates/index.html` will match `/templates`
`/server/user` will not match

### Clearing the cache

You can clear your cache anytime is needed trough `httpCache` service in this way:

``` javascript
angular.module('myApp')
.controller('myController', function(httpCache){
    httpCache.removeAll();

    // start your fresh request
});
```

Normally you'll need to flush the cache after updating some data.

## TODO

- Provide a method to clear the cache for one route only