class apiResponse{
    constructor(statusCode,message="sucess",data="null")
    {
        this.statusCode=statusCode
        this.message=message
        this.data=data
        this.sucess=statusCode
    }
}

export{apiResponse}