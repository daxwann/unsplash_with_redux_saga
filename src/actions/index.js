import { IMAGES, STATS } from '../constants';

const loadImages = () => ({
  type: IMAGES.LOAD,
});

const setImages = images => {
  return {
    type: IMAGES.LOAD_SUCCESS,
    images,
  };
};

const setError = error => ({
  type: IMAGES.LOAD_FAIL,
  error,
});

const loadStats = () => ({
  type: STATS.LOAD,
});

const setStats = images => {
  return {
    type: IMAGES.LOAD_SUCCESS,
    images,
  };
};

const setStatsError = error => ({
  type: STATS.LOAD_FAIL,
  error,
});

export { loadImages, setImages, setError, loadStats, setStats, setStatsError };
