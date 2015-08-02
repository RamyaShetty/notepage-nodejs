/*
    Node.js v0.12.7 Manual & Documentation


    
    HTTP
        http.METHODS

        http.STATUS_CODES

        http.createServer([requestListener])

        http.createClient([port][, host])

        Class: http.Server
            Event: 'request'
            Event: 'connection'
            Event: 'close'
            Event: 'checkContinue'
            Event: 'connect'
                function (request, socket, head) { }

            Event: 'upgrade'
                function (request, socket, head) { }

            Event: 'clientError'
                function (exception, socket) { }

            server.listen(port[, hostname][, backlog][, callback])
            server.listen(path[, callback])
            server.listen(handle[, callback])
            server.close([callback])
            server.maxHeadersCount
            server.setTimeout(msecs, callback)
            server.timeout

        Class: http.ServerResponse
            Event: 'close'
            Event: 'finish'
            response.writeContinue()
            response.writeHead(statusCode[, statusMessage][, headers])
            response.setTimeout(msecs, callback)
            response.statusCode
            response.statusMessage
            response.setHeader(name, value)
            response.headersSent
            response.sendDate
            response.getHeader(name)
            response.removeHeader(name)
            response.write(chunk[, encoding][, callback])
            response.addTrailers(headers)
            response.end([data][, encoding][, callback])

        http.request(options[, callback])

        http.get(options[, callback])

        Class: http.Agent
            new Agent([options])
            agent.maxSockets
            agent.maxFreeSockets
            agent.sockets
            agent.freeSockets
            agent.requests
            agent.destroy()
            agent.getName(options)

        http.globalAgent

        Class: http.ClientRequest
            Event: 'response'
            Event: 'socket'
            Event: 'connect'
            Event: 'upgrade'
            Event: 'continue'
            request.flushHeaders()
            request.write(chunk[, encoding][, callback])
            request.end([data][, encoding][, callback])
            request.abort()
            request.setTimeout(timeout[, callback])
            request.setNoDelay([noDelay])
            request.setSocketKeepAlive([enable][, initialDelay])

        http.IncomingMessage
            Event: 'close'
            message.httpVersion
            message.headers
            message.rawHeaders
            message.trailers
            message.rawTrailers
            message.setTimeout(msecs, callback)
            message.method
            message.url
            message.statusCode
            message.statusMessage
            message.socket
*/
