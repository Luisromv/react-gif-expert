import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Prueba de <GifExpertApp/>', () => {
    
    const newCategory = 'Goku';
    const onAddCategory = newCategory;

    test('should first', () => { 
        render( <GifExpertApp newCategory={newCategory}/> );
        expect( onAddCategory ).toEqual(newCategory);
        //screen.debug();
     });
});