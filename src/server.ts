import http, { IncomingMessage, ServerResponse } from 'http'

import { getfruits, postfruits, deletefruits } from './fruits'

const server = new http.Server((req: IncomingMessage, res: ServerResponse) => {

    const array: string[] = req.url!.split('?')

    const url: string = array[0]

    if (url == '/fruits' && req.method == 'GET') {
        getfruits(req, res)
    }
    else if (url == '/fruits' && req.method == 'POST') {
        postfruits(req, res)
    }
    else if (url == '/fruits' && req.method == 'DELETE') {
        deletefruits(req, res)
    }
    else {
        res.writeHead(404, 'Not Found')
        res.end()
    }
})

server.listen(8080, '127.0.0.1', () => {
    console.log('Server is running on port 8080');
})
