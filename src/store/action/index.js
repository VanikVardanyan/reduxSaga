import {
  CREATE_POST,
  FETCH_POSTS,
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER,
  REQUES_POSTS,
} from '../actionTypes';

export const createPost = (post) => ({
  type: CREATE_POST,
  payload: post,
});

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });

    setTimeout(() => dispatch(hideAlert()), 3000);
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

export function fetchedPosts() {
  return {
    type: REQUES_POSTS,
  };
  // return async (dispatch) => {
  //   try {
  //     dispatch(showLoader());
  //     const responce = await fetch(
  //       'https://jsonplaceholder.typicode.com/posts?_limit=5'
  //     );
  //     const json = await responce.json();
  //     setTimeout(() => {
  //       dispatch({ type: FETCH_POSTS, payload: json });
  //       dispatch(hideLoader());
  //     }, 500);
  //   } catch (e) {
  //     dispatch(showAlert('что то пошло не так'));
  //     dispatch(hideLoader());
  //   }
  // };
}
