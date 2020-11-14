import { call, put, takeEvery } from 'redux-saga/effects';
import { hideLoader, showAlert, showLoader } from '../action';
import { FETCH_POSTS, REQUES_POSTS } from '../actionTypes';

export function* sagaWatcher() {
  yield takeEvery(REQUES_POSTS, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchPosts);
    yield put({ type: FETCH_POSTS, payload });
    yield put(hideLoader());
  } catch (e) {
    yield put(showAlert('что то пошло не так'));
    yield put(hideLoader());
  }
}

async function fetchPosts() {
  const responce = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  );
  return await responce.json();
}
