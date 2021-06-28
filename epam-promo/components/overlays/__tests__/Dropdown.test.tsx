import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../../buttons';
import { Dropdown } from '../Dropdown';

jest.mock('react-dom', () => ({
    findDOMNode: jest.fn(),
}));

describe('Dropdown', () => {
    it('should be rendered correctly', () => {
        const tree = renderer
            .create(<Dropdown
                renderTarget={ props => <Button caption="Test" { ...props } /> }
                renderBody={ props => jest.fn() }
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should be rendered correctly', () => {
        const tree = renderer
            .create(<Dropdown
                renderTarget={ props => <Button caption="Test" { ...props } /> }
                renderBody={ props => jest.fn() }
                onClose={ jest.fn }
                stopCloseSelectors={ ['test-selector'] }
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});


