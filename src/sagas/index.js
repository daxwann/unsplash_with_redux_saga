import imagesSaga from './imagesSaga';
import { all } from 'redux-saga/effects';

function* rootSaga() {
  yield all([imagesSaga()]);
}

export default rootSaga;
