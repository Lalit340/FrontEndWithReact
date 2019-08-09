import React, { Component } from 'react';
import './Dashboard.scss';
import { AppBar, Toolbar, IconButton ,Drawer ,
     List ,ListItem ,ListItemIcon ,ListItemText ,Divider,
} from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';




class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
           left : false,
        }
    }

     toggleDrawer =(side , open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        this.setState({ left :open });
      };

      navigation = () =>{
        this.props.history.push('/dashboard');
     }
    
      sideList = side =>{
          return(
        <div
          className="list"
          role="presentation"
          onClick={this.toggleDrawer(side, false)}
        >
          <List   onClick={this.toggleDrawer(side, false)}>
            {['Inbox'].map((text, index) => (
              <ListItem button key={text}  onClick={this.toggleDrawer(side, false)} onKeyDown={this.toggleDrawer(side, false)}>              >
                <ListItemIcon><MailIcon /></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail'].map((text, index) => (
              <ListItem button key={text} >
                <ListItemIcon >{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text}  />
              </ListItem>
            ))}
          </List>
        </div>
      );
            }
    

    render() {
        return (
            <div className="App">
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu" onClick={this.toggleDrawer('left',true)}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                    <Drawer variant="permanent"  open={this.state.left} onClose={this.toggleDrawer('left' ,false)}>
                        {this.sideList('left')} 
                    </Drawer>
                </AppBar>

            </div>
        );
    }
}

export default Dashboard;
