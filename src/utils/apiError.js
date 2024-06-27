class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export default ApiError
// wjat is stack?
// The stack property of an Error object represents a string that represents the stack trace elements of the function call that led to the error's creation.
// what is Error.captureStackTrace?
// The Error.captureStackTrace() method is used to create a .stack property on the target object which when called will return the location in the code at which Error.captureStackTrace() was called.
//what is super?
//The super keyword is used to access and call functions on an object's parent.
