// src/getRandomImage.js
import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: 'iPi7Jul49fu14ncdhIb0XG5AcMI79O7fzBHpFvkcEz4', // Sizning Access Key'ingiz
});

const getRandomImage = async () => {
  try {
    const result = await unsplash.photos.getRandom();
    if (result.errors) {
      console.error('Error occurred: ', result.errors[0]);
      return null;
    }
    return result.response.urls.small;
  } catch (error) {
    console.error('Error fetching random image: ', error);
    return null;
  }
};

export default getRandomImage;
