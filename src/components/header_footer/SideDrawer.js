import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from 'react-scroll';

const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -100
        });
        props.onClose(false)
    }


    return (
        
        <Drawer
            anchor="right"
            open = {props.open}
            onClose = {() => props.onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={() => {scrollToElement('event')}}>
                    Event starts in
                </ListItem>

                <ListItem button onClick={() => {scrollToElement('info')}}>
                    Venue NFO
                </ListItem>

                <ListItem button onClick={() => {scrollToElement('hightlights')}}>
                    Highlights
                </ListItem>

                <ListItem button onClick={() => {scrollToElement('price')}}>
                    Pricing
                </ListItem>

                <ListItem button onClick={() => {scrollToElement('location')}}>
                    Location
                </ListItem>
            </List>
        
        </Drawer>
            
      
    
    );
};

export default SideDrawer;