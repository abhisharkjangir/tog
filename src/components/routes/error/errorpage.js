import React from 'react';

import Page from '../../common/page/page';
import META from '../../../constants/meta';

const Error = (props) => (
  <Page {...META.error}>
    <h1>Error</h1>
    <p>404</p>
  </Page>
)

export default Error;
