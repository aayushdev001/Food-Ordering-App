import React from "react";
import classes from "./MealsSummary.module.css"

function MealsSummary()
{
    return (
        <section className={classes.summary} >
            <h2>Delicious food, at your doorstep</h2>
            <p>Choose your favourite meals from our broad list of available meals and enjoy a delicious dinner or lunch at home.</p>
            <p>All our meals are cooked with high-quality ingredient, just-in-time and ofcourse by exprienced chefs!</p>
        </section>
    )
}

export default MealsSummary