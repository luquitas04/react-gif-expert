
export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=IsqbQsVsVEXwL7FQXZb5HobNsob96KfA&q=${ category }&limit=10`;
    const rta = await fetch (url);
    const {data} = await rta.json();
    
    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));

    console.log();
    return gifs;
  };