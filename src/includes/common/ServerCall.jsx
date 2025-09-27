import axios from 'axios'

export class ServerCall{
    static sendGet(){}
    static sendPost(data){
        // console.log('servarcall ->',data)
        // const jsonData = JSON.stringify(data);
        // console.log('servarcall ->',jsonData)
        return axios.post('http://localhost:2025/que/save',data)
    }
}