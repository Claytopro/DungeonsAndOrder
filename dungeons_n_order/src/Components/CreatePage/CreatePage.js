import React, { Component } from 'react'
import styles from './CreatePage.module.css'
import header from './Images/create_header3.png'

class CreatePage extends Component {
  render() {
    return (
      <div className= {styles.content}>
           <div className= {styles.header}>
            <img src = {header} alt ="header" className= {styles.headerImage}></img>
            <h1 className= {styles.headerText}>Create</h1>
           </div>

           <div className= {styles.main}>
             Main content

             <div className= {styles.select}>
               Create selector boxes
             </div>
           </div>
      </div>
    );
  }
}

export default CreatePage