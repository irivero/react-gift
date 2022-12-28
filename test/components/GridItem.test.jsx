import { render , screen} from "@testing-library/react"
import { GridItem } from "../../src/components/GridItem"

describe('GridItem Tests', () => { 
    const testTitle = 'Gumball';
    const testUrl = 'https://pictures.com/gumball/gumball_playing.jpg';

    test('should match with the snapshot', () => {         
     const {container} =   render(<GridItem title ={testTitle} url ={testUrl} />)
     expect(container).toMatchSnapshot()
    
    })

    test('should show the image with the ALT', () => { 
        
        render(<GridItem title = {testTitle} url = {testUrl} />)
        screen.debug()

        const {src, alt} = screen.getByRole('img');
        expect (src).toBe(testUrl);
        expect(alt).toBe(testTitle);
     })

     test('should display the title', () => { 
        render(<GridItem title = {testTitle} url = {testUrl} />)
       
        expect(screen.getByText(testTitle)).toBeTruthy();
      })
 })
