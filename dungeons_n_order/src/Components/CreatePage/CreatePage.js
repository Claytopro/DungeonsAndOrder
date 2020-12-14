import React, { Component } from 'react'
import styles from './CreatePage.module.css'
import header from './Images/create_header3.png'

import CreateCharacter from './HelperComponents/CreateCharacter/CreateCharacter'

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

               <div className= {styles.selectItem}>
                  <h4 className= {styles.selectItemHeader}>Create Item</h4>
               </div>

               <div className= {styles.selectItem}>
                  <h4 className= {styles.selectItemHeader}>Create Monster</h4>
               </div>

             </div>
           </div>

          </div>
      </div>
    );
  }
}

export default CreatePage