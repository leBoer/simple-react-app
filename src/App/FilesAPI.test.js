import * as FilesAPI from './FilesAPI'

describe('asyncFetch', () => {

    it('can fetch', async () => {
        const response = await FilesAPI.getAll()
        const result = await response

        expect(result).toBeDefined()
        expect(result).toHaveLength(1000)
    

    })
})