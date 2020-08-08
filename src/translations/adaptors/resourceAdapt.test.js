import { resourceAdapt } from './resourceAdapt';

const MOCK_DATA = {
    rawData: [
        {
            name: 'advisoryDashboard.title',
            value: 'Dashboard',

        },
    ],
    adaptedData: { 'advisoryDashboard.title': 'Dashboard' },
};

describe('adapt investment overview', () => {
    it('adapt data', () => {
        expect(resourceAdapt(MOCK_DATA.rawData)).toEqual(MOCK_DATA.adaptedData);
    });
    it('empty data', () => {
        expect(resourceAdapt([])).toEqual({});
    });
    it('invalid data', () => {
        expect(resourceAdapt(MOCK_DATA.invalidData)).toEqual({});
    });
});
