import React, { Component } from 'react'
import styles from './Dashboard.module.css'
import header from './Images/create_header7.png'
import dummyImage1 from './Images/dummyIMAGE1.PNG'
import dummyImage2 from './Images/DummyIMAGE2.PNG'
import Button from '@material-ui/core/Button'


class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      openPost: false,
    };
  }



  render() {
    return (
      <div className= {styles.content}>
        <div className= {styles.header}>
          <img src = {header} alt ="header" className= {styles.headerImage}></img>
          <h1 className= {styles.headerText}>Dashboard</h1>
        </div>

        <div className= {styles.mainContainer}>
            <div className= {styles.main}>
                  <div className = {styles.mainHeader}>
                    <h3> See What Everyone is Saying About Next Session...</h3>
                    <div className = {styles.buttonHEader}>
                      <Button variant="outlined" size="large" style = {{width:"200px", color: "black",fontWeight:"bold",borderColor:"black"}} onClick = {()=>{this.setState({openPost:true})}}> New Post </Button>
                    </div>
                  </div>

                             
                  
                 <div className= {this.state.openPost?  styles.updateDash : {hiiden:"ya"} } >
                    {this.state.openPost &&
                      <div className = {styles.postHeader} style = {{backgroundColor:"#eaeaec"}}>
                        <h3 style = {{paddingLeft:"20px"}}> Let Everyone Know About Next Session...</h3>
                        <div className = {styles.inputContainer}>
                          <textarea type = "text" placeholder = "Something Exciting..." className={styles.equipInput} style = {{resize: "none"}}></textarea>
                      </div>
                      <div className = {styles.btnRow}>
                          <Button variant="outlined" size="large" style = {{width:"200px", color: "black",fontWeight:"bold",borderColor:"black",backgroundColor:"white"}} onClick = {()=>{this.setState({openPost:false})}}> Post </Button>
                      </div>
                      </div>}
                  </div>
      
                  <div className= {styles.updateDash}>
                        <div className= {styles.updateHeader}>
                              <h3> This is a Test update</h3> 
                        </div>
                        <div className= {styles.updateBody}>
                          <div className= {styles.imgRow}>
                              <img src = {dummyImage1} alt ="header" className= {styles.updateImage}></img>
                              <img src = {dummyImage2} alt ="header" className= {styles.updateImage}></img>
                          </div>
                            <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div className= {styles.updateComments}>
                              <h4>Comments</h4> 
                              <div className= {styles.comment}>
                                  Yes!
                              </div>
                              <div className= {styles.comment}>
                                  Cool
                              </div>
                              <div className= {styles.comment}>
                                  <div>Be there</div>
                              </div>
                        </div>
                  </div>

                  <div className= {styles.updateDash}>
                        <div className= {styles.updateHeader}>
                              <h3> This is a Test update</h3> 
                        </div>
                        <div className= {styles.updateBody}>
                            <div className= {styles.imgRow}>
                              <img src = {dummyImage1} alt ="header" className= {styles.updateImage}></img>
                            </div>
                            <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div className= {styles.updateComments}>
                              <h4>Comments</h4> 
                              <div className= {styles.comment}>
                                  Yes!
                              </div>
                              <div className= {styles.comment}>
                                  Cool
                              </div>
                              <div className= {styles.comment}>
                                  <div>Be there</div>
                              </div>
                        </div>
                  </div>


                  <div className= {styles.updateDash}>
                        <div className= {styles.updateHeader}>
                              <h3> This is a Test update</h3> 
                        </div>
                        <div className= {styles.updateBody}>
                            <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div className= {styles.updateComments}>
                              <h4>Comments</h4> 
                              <div className= {styles.comment}>
                                  Yes!
                              </div>
                              <div className= {styles.comment}>
                                  Cool
                              </div>
                              <div className= {styles.comment}>
                                  <div>Be there</div>
                              </div>
                        </div>
                  </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Dashboard