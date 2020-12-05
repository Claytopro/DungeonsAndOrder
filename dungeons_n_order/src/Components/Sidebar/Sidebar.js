import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Sidebar.module.css'


//Icons
import SwordIcon from '../CustomIcons/SwordIcon'
import MapIcon from '../CustomIcons/MapIcon'
import JournalIcon from '../CustomIcons/JournalIcon'
//Material UI icons
import MenuIcon from '@material-ui/icons/Menu'
import PersonIcon from '@material-ui/icons/Person'
import AddCircleIcon from  '@material-ui/icons/AddCircle'
import Fab from '@material-ui/core/Fab';

class Sidebar extends Component {
    
    constructor(props){
        super(props)
       
        this.state = {
            expandedSidebar: true,
        }
    }

    MenuClick = () =>{
        this.setState({
            expandedSidebar: !this.state.expandedSidebar
        })
    }

    render() {
        return (
        <div>
            <div className = {styles.sidebar} style = {{display:(!this.state.expandedSidebar && 'none' )}}>
                <div className={styles.logo}>
                    <Link to='/' className={styles.headertext}>
                    Dungeons N Order
                    </Link>
                    <div className = {styles.menuWrapper} onClick ={this.MenuClick} >
                        <MenuIcon style={{ fontSize: 30 }}/>
                    </div>
                </div>

                <ul className={styles.nav}>
                    <li className={styles.navItem}>
                        <NavLink className={styles.navLink} to='/dashboard'>
                            <p className={styles.navParag}>Dashboard</p>
                        </NavLink>
                    </li>

                    <li className={styles.navItem}>
                        <NavLink className={styles.navLink} to='/character'>
                            <p className={styles.navParag}><PersonIcon style={{ fontSize: 30,marginBottom: "-5px",marginRight:"5px" }}/>Characters</p>
                        </NavLink>
                    </li>

                    <li className={styles.navItem}>
                        <NavLink className={styles.navLink} to='/combat'>
                            <p className={styles.navParag}>
                                <SwordIcon style={{ fontSize: 30,marginBottom: "-5px",marginRight:"5px" }}/>
                                Combat</p>
                        </NavLink>
                    </li>

                    <li className={styles.navItem}>
                        <NavLink className={styles.navLink} to='/create'>
                            <p className={styles.navParag}>
                                <AddCircleIcon style={{ fontSize: 30,marginBottom: "-5px",marginRight:"5px" }}/>
                            Create</p>
                        </NavLink>
                    </li>

                    <li className={styles.navItem}>
                        <NavLink className={styles.navLink} to='/story'>
                            <p className={styles.navParag}>
                                <JournalIcon style={{ fontSize: 30,marginBottom: "-5px",marginRight:"5px" ,fontWeight:"bolder"}}/>
                                Story</p>
                        </NavLink>
                    </li>

                </ul>
            </div>{/*End of Sidebar */}

            <div className = {styles.floatingSidebar} style = {{display:(this.state.expandedSidebar && 'none' )}}>
                <Fab onClick ={this.MenuClick}>
                    <MenuIcon style={{ fontSize: 30 }}/>
                </Fab>
            </div>
        </div>
        );
    }
}

export default Sidebar