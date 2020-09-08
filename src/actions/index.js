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

const loadStats = id => {
  return {
    type: STATS.LOAD,
    id,
  };
};

const setStats = (id, downloads) => {
  return {
    type: STATS.LOAD_SUCCESS,
    id,
    downloads,
  };
};

const setStatsError = id => ({
  type: STATS.LOAD_FAIL,
  id,
});

export { loadImages, setImages, setError, loadStats, setStats, setStatsError };
