import React from "react";
import renderer from "react-test-renderer";
import {dataSource} from "./dataMocks";
import {ColumnPickerFilter} from "../ColumnPickerFilter";

jest.mock("react-dom", () => ({
    findDOMNode: jest.fn(),
}));

describe("ColumnPickerFilter", () => {
    it("should be rendered correctly", () => {
        const tree = renderer
            .create(<ColumnPickerFilter
                selectionMode='single'
                dataSource={ dataSource }
                value={ null }
                onValueChange={ jest.fn() }
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("should be rendered correctly", () => {
        const tree = renderer
            .create(<ColumnPickerFilter
                selectionMode='single'
                dataSource={ dataSource }
                value={ null }
                onValueChange={ jest.fn() }
                valueType='id'
                size='30'
                sorting={ {field: "level", direction: "desc"} }
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});


