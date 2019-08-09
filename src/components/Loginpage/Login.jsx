import React, { Component } from 'react';
import './Login.css';
import { TextField, Button, Card, CardContent, CardActions, InputAdornment } from '@material-ui/core';
//import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
import visibility from '../../asserts/icons/visibility.png';
import invisible from "../../asserts/icons/invisible.png";
import gmail from "../../asserts/icons/gmail-logo.png";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: '',
            password: "",
            showPassword: false,
        }
    }
    handleMail = (event) => {
        this.setState({ mail: event.target.value });
    }
    handlePassword = (event) => {
        this.setState({ password: event.target.value });
    }
    handleClickShowPassword() {
        this.setState({ showPassword: !this.state.showPassword });
    }
    navigation(){
        this.props.history.push('/dashboard');
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Card className='App-card'>
                        <h2 >Wellcome to IndusNet    </h2>
                        <CardContent className="App-cardCss">

                            <TextField
                                required
                                id="outlined-name"
                                label="E-mail"
                                variant="outlined"
                                className='App-textField'
                                placeholder="email"
                                value={this.state.mail}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <div >
                                                <img className="App-img" src={gmail} alt="gmail" />
                                            </div>
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={this.handleMail}
                            />
                        </CardContent>
                        <CardContent className="App-cardCss">

                            <TextField
                                required
                                id="outlined-name"
                                label="Password"
                                placeholder="password"
                                variant="outlined"
                                className='App-textField'
                                value={this.state.password}
                                onChange={this.handlePassword}
                                type={this.state.showPassword ? "text" : "password"}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <div>
                                                {this.state.showPassword ?
                                                    (<div onClick={() => this.handleClickShowPassword()}>
                                                        <img className="App-img" src={invisible} alt="invisible" />
                                                    </div>)
                                                    : (<div onClick={() => this.handleClickShowPassword()}>
                                                        <img className="App-img" src={visibility} alt="visibility" />
                                                    </div>
                                                    )}
                                            </div>
                                        </InputAdornment>
                                    ),
                                }}

                            />
                        </CardContent>
                        <CardContent>
                            
                            <Button
                                color='primary'
                                variant='contained'
                               onClick={() =>this.navigation()}
                            >signin</Button>
                        </CardContent>
                        <CardActions className='App-text'>
                            <h6 > </h6>
                        
                        </CardActions>
                    </Card>
                </header>

            </div>
        );
    }
}

export default Login;
