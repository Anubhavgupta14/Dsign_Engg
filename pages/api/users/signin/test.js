
export default async function(req,res){
    const {cookies} = req;

    const jwt = cookies.JWT;
    if(!jwt){
        //  return res.json({body:"Invalid Token"}).status(401)
        console.log(jwt)
    }

    console.log(jwt)
    res.json({body: 'Secret Data'})
}