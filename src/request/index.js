import axios from 'axios'
export const get = (url, params = {})=>{
    return new Promise((resolve, reject)=>{
        axios.get(url, {
            params: params,
            // baseURL: 'http://localhost:8080'
        })
        .then(response=>{
            // console.log(response)
            if(response.status === 200 && response.data.status === 0){
                resolve(response.data);
            }else{
                console.log('请求失败rr');
            }
        })
        .catch(error=>{
            console.log('请求失败');
            throw error    
        })
    })
}

export const post = async (url, params = {})=>{
    try {
        let response = await axios.post(url, params, {
            // baseURL: 'http://localhost:8080'
        });
        if(response.status === 200 && response.data.status === 0){
            return response.data;
        }else{
            throw new Error();
        }
    } catch (error) {
        console.log('请求失败');        
    }
}