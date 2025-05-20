class apiError extends Error{
    constructor(
        statuCode,
        message="something went wrong",
        error=[],
        stack=""
    )
    {
        super(message)
        this.statuCode=statuCode
        this.data=""
        this.message=message
        this.sucess=false
        this.error=error
    
    if(stack){
        this.stack=stack

    }
    else{
        Error.captureStackTrace(this,this.constructo)
    }
    

} 
}


export{apiError}