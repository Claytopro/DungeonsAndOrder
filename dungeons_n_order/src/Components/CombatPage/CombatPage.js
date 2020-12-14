import React, { Component } from 'react'
import styles from './Combat.module.css'
import header from './Images/create_header4.png'


class CombatPage extends Component {
  render() {
    return (
      <div className= {styles.content}>
        <div className= {styles.header}>
        <img src = {header} alt ="header" className= {styles.headerImage}></img>
        <h1 className= {styles.headerText}>Combat</h1>
        </div>

        <div className= {styles.mainContainer}>
            <div className= {styles.main}>
              Main 
            </div>
        </div>
      </div>
    );
  }
}

export default CombatPage