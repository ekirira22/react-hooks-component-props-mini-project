import React from "react";

function About({imgSource, aboutBlog}){
    return (
        <aside>
            {imgSource ? <img src={imgSource} alt="blog logo"></img> : <img src="https://via.placeholder.com/215" alt="blog logo"></img>}
            <p>{aboutBlog}</p>
        </aside>
    )
}

export default About