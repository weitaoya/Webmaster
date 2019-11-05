import React from 'react'
import axios from 'axios'
class Login extends React.Component{
    submit(){
        axios.post('/hehe/admin/user/login',{userName:'123',passWord:'123'}).then((data)=>{
            console.log(data)
        })
    }
    render(){
        return(
            <div>
                Login
                <button onClick={this.submit}></button>
            </div>
        )
    }
}
export default Login