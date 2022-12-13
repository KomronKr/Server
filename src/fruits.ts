import url from 'url'

import { IncomingMessage, ServerResponse } from 'http';

const fruits:string[] = [
    'Banana',
    'Apple'
]

export function getfruits(req: IncomingMessage, res: ServerResponse) {
    res.writeHead(200, 'OK')
    res.write(JSON.stringify(fruits))
    res.end()
}

export function postfruits(req: IncomingMessage, res: ServerResponse) {
    const body: any[] = []
    req.on('data', (chunk) => {
            body.push(chunk)
        })
        .on('end', () => {
            const buffer = Buffer.concat(body)
            const newMusic = buffer.toString()
            fruits.push(newMusic)
            res.writeHead(201, 'Created')
            res.end()
        })
}
    export function deletefruits(req: IncomingMessage, res: ServerResponse) {
        const query = url.parse(req.url!, true).query
        fruits.splice(+query.index!, 1)
        res.writeHead(204, 'No Content')
        res.end()
    }        