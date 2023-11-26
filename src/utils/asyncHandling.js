
const asyncHandling = (requestHandling) => {
    (req,res,next) => {
        Promise.resolve(requestHandling(req,res,next)).catch((err) => next(err))
    }
}

export {asyncHandling};