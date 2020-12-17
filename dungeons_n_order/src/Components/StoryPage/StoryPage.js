import React, { Component } from 'react'
import styles from './StoryPage.module.css'
import header from './Images/create_header5.png'

import BookIcon from '../CustomIcons/BookIcon'


class StoryPage extends Component {
  render() {
    return (
      <div className= {styles.content}>
        <div className= {styles.header}>
          <img src = {header} alt ="header" className= {styles.headerImage}></img>
          <h1 className= {styles.headerText}>Story</h1>
        </div>

        <div className= {styles.mainContainer}>
            <div className= {styles.main}>
              <BookIcon style = {{height:"900px",width: "900px",marginTop:"-100px"}}/>
            </div>
        </div>
    </div>
    );
  }
}

export default StoryPage