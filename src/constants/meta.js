import ENV from './config';
import ASSET from './assets';

export default {
  default : {
    name : 'Madhav Shankar',
    title : 'Madhav Shankar',
    description : 'Theory of Growth',
    url : ENV.URL || '',
    img : ASSET.LOGO || ''
  }
}
