import fetch from 'node-fetch';
import dotenv from 'dotenv'
dotenv.config();
export const getImages = async (query) => {
    const result = await fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.SECRET_KEY}&query=${query}`)
      .then(res => res.json())
      .then(test => {
        const array = [];
        test.results.forEach((elem) => {
          const imgObject = {descr: elem.alt_description,
            url: elem.urls.small,
            download: elem.links.download,
            username: elem.user.name,
            user_bio: elem.user.bio,
            user_image: elem.user.profile_image.large}
          array.push(imgObject);
        }); 
        return array
    })
    return result
}
