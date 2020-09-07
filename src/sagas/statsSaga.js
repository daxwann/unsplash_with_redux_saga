import { take, fork } from 'redux-saga/effects';
import { IMAGES } from '../constants';

function* handleStatsRequest(id) {
  console.log('fetching stats for ', id);
}

function* watchImageSuccess() {
  while (true) {
    const { images } = yield take(IMAGES.LOAD_SUCCESS);

    for (let i = 0; i < images.length; i++) {
      yield fork(handleStatsRequest, images[i].id);
    }
  }
}

export default watchImageSuccess;
