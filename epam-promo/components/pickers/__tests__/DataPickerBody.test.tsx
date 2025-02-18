import React from 'react';
import { ArrayDataSource } from '@epam/uui';
import { renderWithContextAsync } from "@epam/test-utils";
import { DataPickerBody } from '../DataPickerBody';
import { DataPickerRow } from '../DataPickerRow';

jest.mock('react-dom', () => ({
    findDOMNode: jest.fn(),
}));

const languageLevels = [
    { "id": 2, "level": "A1" },
    { "id": 3, "level": "A1+" },
    { "id": 4, "level": "A2" },
    { "id": 5, "level": "A2+" },
    { "id": 6, "level": "B1" },
    { "id": 7, "level": "B1+" },
    { "id": 8, "level": "B2" },
    { "id": 9, "level": "B2+" },
    { "id": 10, "level": "C1" },
    { "id": 11, "level": "C1+" },
    { "id": 12, "level": "C2" },
];

const mockDataSource = new ArrayDataSource({
    items: languageLevels,
});

describe('DataPickerBody', () => {
    it('should be rendered correctly', async () => {
        const tree = await renderWithContextAsync(
            <DataPickerBody
                value={ null }
                onValueChange={ jest.fn }
                rows={ mockDataSource.props.items }
                search={ {
                    value: null,
                    onValueChange: jest.fn,
                } }
            />,
        );
        expect(tree).toMatchSnapshot();
    });

    it('should be rendered correctly', async () => {
        const tree = await renderWithContextAsync(
            <DataPickerBody
                value={ null }
                onValueChange={ jest.fn }
                rows={ [] }
                search={ {
                    value: null,
                    onValueChange: jest.fn,
                } }
                renderNotFound={ () => <div>Not found</div> }
            />,
        );
        expect(tree).toMatchSnapshot();
    });

    it('should be rendered correctly', async () => {
        const tree = await renderWithContextAsync(
            <DataPickerBody
                value={ null }
                onValueChange={ jest.fn }
                editMode="modal"
                search={ {
                    value: null,
                    onValueChange: jest.fn,
                } }
                showSearch="auto"
                showSelectedRows
                maxHeight={ 800 }
                searchSize="48"
                rows={
                    mockDataSource.props.items.map((props) =>
                        <DataPickerRow
                            key={ props.id }
                            renderItem={ item => <div>{ item }</div> }
                            id={ props.id }
                            rowKey={ props.level }
                            index={ props.id }
                        />)
                }
                onKeyDown={ jest.fn }
                rowsCount={ 7 }
                totalCount={ 11 }
                scheduleUpdate={ jest.fn }
            />,
        );
        expect(tree).toMatchSnapshot();
    });
});