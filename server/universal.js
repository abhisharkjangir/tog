import path from 'path';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Router } from 'react-router-dom';
import { matchRoutes} from 'react-router-config';
import {routes} from '../src/components/routes/routes';
import PrivateRoutes from '../src/constants/privateroutes';
import createServerStore from './store';
import App from '../src/components/app';

// const PrivateRouteError = () => <div><h1> Private Route</h1> <p> Can 't be rendered server side</p></div>
// A simple helper function to prepare the HTML markup
const prepHTML = (data, { html, head, body }) => {
  data = data.replace('<html lang="en">', `<html ${html}`);
  data = data.replace('</head>', `${head}</head>`);
  data = data.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  return data;
};

const universalLoader = (req, res) => {

  // Load in our HTML file from our build
  const filePath = path.resolve(__dirname, '../build/index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    // If there's an error... serve up something nasty
    if (err) {
      console.error('Read error', err);
      return res.status(404).end();
    }

    // Create a store and sense of history based on the current path
    const { store, history } = createServerStore(req.path);

    // Render App in React
    let routeMarkup = ''
    if(!PrivateRoutes.includes(req.path)) {
      // For each route that matches
      const promises = matchRoutes(routes,req.url).map(({route, match}) => {
        // Load the data for that route. Include match information
        // so route parameters can be passed through.
        return route.fetchData ? route.fetchData(store) : Promise.resolve({})
      })

      Promise.all(promises).then((data) => {
        // Public Route
        routeMarkup = renderToString(
          <Provider store={store}>
            <Router history={history}>
               <App/>
            </Router>
          </Provider>
        );

        routeMarkup = routeMarkup +  `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}</script>`

        // Let Helmet know to insert the right tags
        const helmet = Helmet.renderStatic();
        // Form the final HTML response
        const html = prepHTML(htmlData, {
          html: helmet.htmlAttributes.toString(),
          head:
            helmet.title.toString() +
            helmet.meta.toString() +
            helmet.link.toString(),
          body: routeMarkup
        });
        // Up, up, and away...
        res.send(html);
      })
    } else {
      res.send('Private Route');
    }
  });
};

export default universalLoader;
