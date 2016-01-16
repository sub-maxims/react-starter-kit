## Install

Due to the dependency on `babel-register`, this starter-kit works only with node version >= 5.x

```
npm install nodemon -g
npm install
```

Usage in development:
```
npm run dev
```
Usage in production:
```
npm start
```
To build assets for production:
```
npm run build
```
To build stats.json, in order to analyse the app with webpack module analyzer
```
npm run stats
```

## Concepts

This minimalist starter kit is configured to realize the following features:
	
   * Server side rendered Single Page Application ( a.k.a. Isomorphic Javascript)
 
   * Hot Module Replacement within the dev-environment

   * Component based file structure

   * Implementing React and React Router

   * Set up a groundwork for lazy loading

The idea is to keep architecture out of this boilerplate, therefore the use of frameworks such as Express, Flux, etc. is avoided in this repository. 

Furthermore, The following image illustrates the core philosophy of the front-end-back-end of UI layer


![Image of Yaktocat](https://www.nczonline.net/images/wp-content/uploads/2013/10/nodejs2.png)
 

credits: Nicholas C. Zakas 

## Code Snippets

Explanations of some important code snippets.

At `server.js` the following snippets make server side rendering of react possible 

``` javascript
import { renderToString } from 'react-dom/server'

...

data.body = renderToString(<RoutingContext {...renderProps} />);

```

While in development environment, the assets are proxied by the webpack dev server
``` javascript
if (!isProduction) {
...

  proxy.web(req, res, {
      target: 'http://localhost:8080/'
  });
}

```

At `Index.js` the react-router and webpack are configured to lazyload `ByeRoute.js`

``` javascript
getChildRoutes(location, cb) {
	require.ensure([], (require) => {
		cb(null, [ 
			require('./ByeRoute.js') 
		])
	})
}

```
