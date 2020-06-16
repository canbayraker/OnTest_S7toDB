export class Request{

    constructor(url){
        this.url = url;
    }

    async get(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    async post(url,newData){
        const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(newData),
            headers: {
                "content-type" : "application/json; charset=UTF-8"
            }
        });
        const data = await response.json();                        
        return data;
    } 
        
    async put(url,newData){
        const response = await fetch(url,{
            method: 'PUT',
            body: JSON.stringify(newData),
            headers: {
                "content-type" : "application/json; charset=UTF-8"
            }
        });
        const data = await response.json();                        
        return data;
    }  

    async delete(url){
        const response = await fetch(url, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    }  
    
}   