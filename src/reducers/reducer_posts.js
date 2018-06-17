import FETCH_POSTS from '../actions/index';
import _ from 'lodash';

// function getMutatedRepsonse(response) {
//   const mutatedObject = {};

//   response.forEach(element => {
//     mutatedObject[element.id] = element;
//   });
// } 

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload, 'id');
    default:
      return state;
  }
}