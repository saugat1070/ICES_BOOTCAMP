

// controller --> two arguments (request, response)
// middleware --> three arguments (request, response, next)


async function sampleMiddleware(req, res, next) {
    req["request-id"] = Math.floor(Math.random()*100000) // --> adding a new property to the request object
    console.log("This is a sample middleware");
    next(); // agadi jaane permission dido raicha
}

export {sampleMiddleware};