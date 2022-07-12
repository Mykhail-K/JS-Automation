import FinanceModel from '../model/FinanceModel';

describe('As a FinanceModel API user', () => {
    describe('I have to get HTTP response code', () => {
        test('200 for a valid range', async() => {

            //TODO: replace this method with FinanceModel.getFinanceData(...) method
            // to be able to define different test conditions:
            // - company
            // - region
            // - interval
            // - range
            const { status } = await FinanceModel.getFinanceData({company:'AAPL', region:'US', interval:'2m', range:'1d'});
            expect(status).toBe(200);
        });

        test('422 for a invalid range', async() => {
            // TODO: put required parameter to simulate the required test condition
            const { status } = await FinanceModel.getFinanceData({range:'10000d'});
            expect(status).toBe(422);
            //  TODO: insert verifications
            // ...
        });

        test('404 for a nonexistent company', async() => {
            // TODO: put required parameter to simulate the required test condition
            const { status } = await FinanceModel.getFinanceData({company:null});
            expect(status).toBe(404);
            //  TODO: insert verifications
            // ...
        });
    });

    describe('I have to get values for response headers', () => {
        test('content-type', async() => {
            const { headers } = await FinanceModel.getFinanceData();
            expect(headers['content-type']).toBe('application/json;charset=utf-8');
        });

        test('x-request-id', async() => {
            const { headers } = await FinanceModel.getFinanceData();
            expect(headers['x-request-id']).toMatch(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/gi)
            //  TODO: insert verifications for "x-request-id" header
            //  You have to use regular expression to verify a headers unique value:
            //  "d5f838b8-fe84-4f2a-b950-7a07f13264a7"
            // ...

        });
    });
});
