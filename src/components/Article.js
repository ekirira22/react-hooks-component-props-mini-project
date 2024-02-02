import React from "react";

export default function Article({title, date, preview, time}){
    //display coffees and bentos
    console.log(time)
    let intervals
    let emoji 

    if(time > 0 && time <=30){
         intervals = Math.ceil(time / 5);
         emoji = "☕️"
    }else{
        intervals = Math.ceil(time / 10)
        emoji = "🍱"
    }

    return (
        <article>
            <h3>{title}</h3>
            {date ? <small>{date}</small> : <small>January 1, 1970</small>}
            <p>{emoji.repeat(intervals)}&nbsp;{time + " Minutes Read"} </p>        
            <p>{preview}</p>
        
        </article>
    )
}