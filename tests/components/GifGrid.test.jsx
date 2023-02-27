import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {

    const category = 'Luffy';

    test('debe mostrar el primer loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('debe mostrar items cuando se carga la imagen mediante useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Luffy',
                url: 'https://one-piece.com/luffy.jpg'
            },
            {
                id: '123',
                title: 'Zoro',
                url: 'https://one-piece.com/zoro.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);

        expect( screen.getAllByRole( 'img' ).length).toBe(2);

    });
});