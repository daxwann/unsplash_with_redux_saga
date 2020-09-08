import { take, fork, call, put } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchStats } from '../api';
import { setStatsError, setStats, loadStats } from '../actions';

function* handleStatsRequest(id) {
  for (let i = 0; i < 3; i++) {
    try {
      yield put(loadStats(id));
      const stats = yield call(fetchStats, id);
      yield put(setStats(id, stats.downloads.total));
      return true;
    } catch (e) {}
  }

  yield put(setStatsError(id));
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
