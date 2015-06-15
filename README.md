#ngHttpCache

Module the enable request caching for your whole Angular app.

## How to use

### Install

_At the moment is not available as bower component_ but you can still install this with `bower install linkmesrl/ngHttpCache --save`.

Otherwise you can simply download this module and include `src/ngHttpCache.js` in your page.

### Usage

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

- `/api/members/12` will match `/api`
- `/templates/index.html` will match `/templates`
- `/server/user` will not match

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
