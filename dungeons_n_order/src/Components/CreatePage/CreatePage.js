import React, { Component } from 'react'
import styles from './CreatePage.module.css'
import header from './Images/create_header3.png'

import CreateCharacter from './HelperComponents/CreateCharacter/CreateCharacter'
import CreateItem from './HelperComponents/CreateItem/CreateItem'
import CreateMonster from './HelperComponents/CreateMonster/CreateMonster'

class CreatePage extends Component {
 
  constructor(props){
      super(props)
    
      this.state = {
          expanded: false,
      }
  }

  characterToggle = () =>{
    this.setState({
      expanded: !this.state.expanded
    })
}

  render() {
    return (
      <div className= {styles.content}>
           <div className= {styles.header}>
            <img src = {header} alt ="header" className= {styles.headerImage}></img>
            <h1 className= {styles.headerText}>Create</h1>
           </div>

          <div className= {styles.mainContainer}>
           <div className= {styles.main}>
             <div className = {styles.mainHeader}>
              <h3> Explore you Creativity and Create...</h3>
             </div>
             <div className= {styles.select}>
              <CreateCharacter/>
              <CreateItem/>
              <CreateMonster/>
             </div>
           </div>
          </div>{/*end main container */}
      </div>
    );
  }
}

export default CreatePage