import React,{Component} from 'react'

export default class Login extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            isAuth:false
        }
    }
    onHandleChange=(event)=>{
        const value=event.target.value;
        const name=event.target.name;
        this.setState({
            [name]:value
        });
    };

    onHandleSubmit=(e)=>{
        e.preventDefault();
        let {username,password}=this.state;
        if(username==='ttn' && password==='ttn'){
            this.setState({
                isAuth:true,
            })
            this.props.loginCallBack(true)
            this.props.history.push('/books');
        }
    }
    render(){
        return(
            <div>
                <h1>Welcome to Book Gallery</h1>
                <form action="" method="post" onSubmit={this.onHandleSubmit}>
                    <input type="text"
                           name="username"
                           placeholder="username"
                           value={this.state.username}
                           onChange={this.onHandleChange}/>
                    <input type="password"
                           name="password"
                           placeholder="password"
                           value={this.state.password}
                           onChange={this.onHandleChange}/>
                    <input type='submit' value='Login'/>
                </form>
            </div>
        )
    }
}