import React, { Component } from "react";

import { Grid, Cell } from "react-mdl";

class Landing extends Component{
    render() {
        return (
            <div style={{ width: "100%", margin: "auto" }} >
                <Grid className="landing-grid" >
                    <Cell col={12}>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            className="avatar-img"
                        
                        />
                        
                        <div className="banner-text">
                            <h1> Full Stack Web Developer</h1>
                            <hr />
                            <p>HTML/CSS|Bootstrap|Javascript|React|NodeJS|Express|MongoDB</p>
                            <div className="social-links">
                                {/* Linkedin*/}
                                <a href="https://www.linkedin.com/in/rafael-estrada-b005b3193" rel="noopener noreferer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                    </a>
                                     {/* Github*/}
                                <a href="https://www.github.com/rafaelestradajr" rel="noopener noreferer" target="_blank">
                                    <i className="fa fa-github-square"aria-hidden="true"/>
                                </a>
                            </div>
                            </div>
                    </Cell>
            </Grid>
            
            </div>
        )
    }

}
export default Landing;