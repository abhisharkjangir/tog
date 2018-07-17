import CONST from './constants';

const STAG_ENV = {

};

const PROD_ENV = {

};

const LOCAL_ENV = {

};

const COMMON_ENV = {
  // Add here if there is any `COMMON ENVIRONMENT VARIABLES`
};

let APP_ENV = process.env.REACT_APP_ENV;

let ENV = {};

switch(APP_ENV) {
  case CONST.ENV_TYPES.PROD:
    ENV = {...PROD_ENV, ...COMMON_ENV};
    break;

  case CONST.ENV_TYPES.STAG:
    ENV = {...STAG_ENV, ...COMMON_ENV};
    break;

  case CONST.ENV_TYPES.LOCAL:
    ENV = {...LOCAL_ENV, ...COMMON_ENV};
    break;

  default:
    ENV = {...STAG_ENV, ...COMMON_ENV};
    break;
}

export default ENV;
