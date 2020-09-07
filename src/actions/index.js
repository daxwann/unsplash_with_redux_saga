import { IMAGES } from '../constants';

const loadImages = () => ({
  type: IMAGES.LOAD,
});

const setImages = () => ({
  type: IMAGES.LOAD_SUCCESS,
  images,
});

const setError = () => ({
  type: IMAGES.LOAD_FAIL,
  error,
});

export { loadImages, setImages, setError };
