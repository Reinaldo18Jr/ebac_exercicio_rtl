import { fireEvent, render, screen } from '@testing-library/react';

import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Adicionar dois cometários', () => {
        render(<PostComment />)

        fireEvent.change(screen.getByTestId('escrever-comentario'), {
            target: {
                value: 'Primeiro comentário do teste',
            }
        });
        fireEvent.click(screen.getByTestId('btn-add-comentario'));

        fireEvent.change(screen.getByTestId('escrever-comentario'), {
            target: {
                value: 'Segundo comentário do teste',
            }
        });
        fireEvent.click(screen.getByTestId('btn-add-comentario'));

        expect(screen.getAllByTestId('area-do-comentario')).toHaveLength(2);
    });
}); 