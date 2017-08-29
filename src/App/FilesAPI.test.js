import * as FilesAPI from './FilesAPI'

test('FilesAPI can fetch', async () => {
    const response = await FilesAPI.getAll()
    const result = await response

    expect(result).toBeDefined()
    expect(result).toHaveLength(1000)
})