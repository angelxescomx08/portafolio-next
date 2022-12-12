export const wait = (segundos:number) =>{
    return new Promise((r)=>{
        setTimeout(r,segundos)
    })
}