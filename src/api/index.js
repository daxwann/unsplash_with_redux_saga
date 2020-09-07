const KEY = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
const URL = `https://api.unsplash.com/photos`;
const PER_PAGE = '10';

const fetchImages = async pageNumber => {
  const response = await fetch(
    `${URL}/?client_id=${KEY}&per_page=${PER_PAGE}&page=${pageNumber}`,
  );

  const data = await response.json();

  if (response.status >= 400) {
    throw new Error(data.errors);
  }

  return data;
};

export { fetchImages };
