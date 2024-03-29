import axios from "axios"
import { ADD_USER,  DELETE_USER_, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "./Actiontype"
import { toast } from "react-toastify"

export const makeRequest= () => {
    return{
        type:MAKE_REQUEST
    }
}
export const failRequest= (err) => {
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}
export const getUserList= (data) => {
    return{
        type:GET_USER_LIST,
        payload:data
    }
}
export const deleteUser= () => {
    return{
        type:DELETE_USER_

    }
}
export const addUser= () => {
    return{
        type:ADD_USER
        
    }
}
export const updateUser = () => {
    return{
        type:UPDATE_USER
        
    }
}

export const getUserObj= ( data) => {
    return{
        type:GET_USER_OBJ,
        payload:data
    }
}
export const  FeatchUserList=()=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.get('http://localhost:3004/user/').then(res=>{
            const userlist=res.data;
            dispatch(getUserList(userlist))
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}
export const  RemoveUser=(code)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.delete('http://localhost:3004/user/'+code).then(res=>{
            dispatch(deleteUser());
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}
export const FunctionAddUser=(data)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.post('http://localhost:3004/user/',data).then(res=>{
            dispatch(addUser());
            toast.success('User Added Successfully.')
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}
export const FunctionUpdateUser=(data,code)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.put('http://localhost:3004/user/'+code,data).then(res=>{
            dispatch(updateUser());
            toast.success('User Updated Successfully.')
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}
export const  FeatchUserObj=(code)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.get('http://localhost:3004/user/'+code).then(res=>{
            const userlist=res.data;
            dispatch(getUserObj(userlist))
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}