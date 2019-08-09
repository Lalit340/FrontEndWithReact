import React, { Component } from 'react';
import './Signup.css';
import { TextField, Button, Card, CardContent, InputAdornment ,FormControl ,
        InputLabel , Select ,MenuItem  ,OutlinedInput     
} from '@material-ui/core';
//import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
import visibility from '../../asserts/icons/visibility.png';
import invisible from "../../asserts/icons/invisible.png";
import gmail from "../../asserts/icons/gmail-logo.png";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: '',
            password: "",
            cmfPassword: "",
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
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Card className='App-card'>
                        <h2 >Wellcome to Signup   </h2>
                        <CardContent className="App-cardCss">
                            <form>
                                <FormControl variant="outlined" >
                                    <InputLabel  htmlFor="outlined-age-simple">
                                        Age
                                     </InputLabel>
                                    <Select
                                        // value={values.age}
                                        // onChange={handleChange}
                                        input={<OutlinedInput  name="age" id="outlined-age-simple" />}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </form>
                        </CardContent>
                        <CardContent className="App-cardCss">

                            <TextField
                                required
                                id="outlined-name"
                                label="Name"
                                placeholder="Enter your name"
                                variant="outlined"
                                className='App-textField'
                            // value={this.state.password}
                            // onChange={this.handlePassword}
                            // type={this.state.showPassword ? "text" : "password"}
                            // InputProps={{
                            //     endAdornment: (
                            //         <InputAdornment position="end">
                            //             <div>
                            //                 {this.state.showPassword ?
                            //                     (<div onClick={() => this.handleClickShowPassword()}>
                            //                         <img className="App-img" src={invisible} alt="invisible" />
                            //                     </div>)
                            //                     : (<div onClick={() => this.handleClickShowPassword()}>
                            //                         <img className="App-img" src={visibility} alt="visibility" />
                            //                     </div>
                            //                     )}
                            //             </div>
                            //         </InputAdornment>
                            //     ),
                            // }}

                            />
                        </CardContent>

                        <CardContent className="App-cardCss">

                            <TextField
                                required
                                id="outlined-name"
                                label="Mobile Numder"
                                placeholder="Enter your mobile number"
                                variant="outlined"
                                className='App-textField'
                            // value={this.state.password}
                            // onChange={this.handlePassword}
                            // type={this.state.showPassword ? "text" : "password"}
                            />
                        </CardContent>

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
                            >register</Button>
                        </CardContent>

                    </Card>
                </header>

            </div>
        );
    }
}

export default Signup;
