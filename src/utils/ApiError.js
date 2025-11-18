class ApiError extends Error{
    constructor(
        statusCode,
        message ="Something went wrong",
        errors = []
        statck =""
    ){
        super (message)
        this.statusCode = statusCode
        this.data= null
        this.message = message 
        this.success = false;
        this.errors = errors

        if(statck){
            this.stack = statck
        }
        else{
            Error.captureStackTRace(this, this.constractor)
        }
    }
  
    

}


export {ApiError}