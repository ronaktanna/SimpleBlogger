import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

// function getMutatedRepsonse(response) {
//   const mutatedObject = {};

//   response.forEach(element => {
//     mutatedObject[element.id] = element;
//   });
// } 

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}