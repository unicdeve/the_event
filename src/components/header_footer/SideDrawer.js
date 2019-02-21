import React from 'react';
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { element } from 'prop-types';

const SideDrawer = (props) => {

    const scrollTo = (element)  => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150
        });
        props.onClose(false)
    }

    return (
        <Drawer 
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={() => scrollTo('featured')}>
                    Event starts in
                </ListItem>

                <ListItem button onClick={() => scrollTo('venuenfo')}>
                    Venue INFO
                </ListItem>

                <ListItem button onClick={() => scrollTo('highlights')}>
                    Highlights
                </ListItem>

                <ListItem button onClick={() => scrollTo('pricing')}>
                    Pricing
                </ListItem>

                <ListItem button onClick={() => scrollTo('location')}>
                    Location
                </ListItem>
            </List>
        </Drawer>
    );
};

export default SideDrawer;