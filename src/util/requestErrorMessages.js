const REQUEST_ERROR_MESSAGES = {
    0: `The request to fetch data failed, which could be caused by a CORS issue or faulty internet connection.`,
    400: `This request to fetch data failed because it was not formatted correctly - this is likely due to the parameters being passed wrong from my end, sorry!`,
    404: `The request to fetch data failed, because the resource was not found on the server - this is probably because I messed up the request URL`,
    500: `The request to fetch data failed, because an internal error occured on the destination server - I recommend waiting a while until they fit it, then try again`,
}

export { REQUEST_ERROR_MESSAGES };