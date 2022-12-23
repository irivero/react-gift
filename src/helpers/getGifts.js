
    export const getGifts = async (category) =>{
        const apiKey = 'I4bOnmySmJ7oAY9cKMhRdVsjlRaBcCNg';
        const resp   = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${category}&limit=10`);
        const { data = []} = await resp.json(); 

        const gifts = data.map(img=>({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }))

        return gifts;

    }