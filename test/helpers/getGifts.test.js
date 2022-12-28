import { getGifts } from "../../src/helpers/getGifts"

describe('getGifts Tests', () => { 
    
    test('should retunr an array of images', async () => { 
        
        const gifs = await getGifts('love')

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })        
     })
 })