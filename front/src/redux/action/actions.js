import axios from 'axios';
export const USER_CREATE = "USER_CREATE";


export const userCreate = (payload) =>{
    return async( dispatch) =>{
        try {
            let res = await axios.post(
                `http://localhost:3000/usercreate`,
                payload
            );
            await axios.post (`http://localhost:3000/user/:id`)
            return res;
        } catch (err) {
            console.log(err.message); 
        }
    }
}