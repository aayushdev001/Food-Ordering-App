import classes from "./AvailableMeal.module.css"
import Card from "../UI/Card"
import MealItem from "./MealItem/MealItem"
import React from "react"
// const DUMMY_MEALS = [
//     {
//         id: 'm1',
//         name: 'Sushi',
//         description: 'Finest fish and veggies',
//         price: 22.99,
//     },
//     {
//         id: 'm2',
//         name: 'Schnitzel',
//         description: 'A german specialty!',
//         price: 16.5,
//     },
//     {
//         id: 'm3',
//         name: 'Barbecue Burger',
//         description: 'American, raw, meaty',
//         price: 12.99,
//     },
//     {
//         id: 'm4',
//         name: 'Green Bowl',
//         description: 'Healthy...and green...',
//         price: 18.99,
//     },
// ];

function AvailableMeals() {

    const [meals, setMeals] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState()

    React.useEffect(()=>{
        async function fetchMeals()
        {
            setIsLoading(true)
            const response = await fetch("http://localhost:5000/meals");

            if(!response.ok)
            {
                throw new Error("Something went wrong")
            }

            const data = await response.json()
            console.log(data);

            const loadedMeals = []

            for(const key in data) 
            {
                loadedMeals.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price,
                })
            }
            setMeals(loadedMeals)
            setIsLoading(false)
        }

            fetchMeals().catch(error=>{

                setIsLoading(false)
                setError(error)
            })
        
    },[])

    if(isLoading)
    {
        return(
            <section>
                <p className={classes.loading}>Loading...</p>
            </section>
        )
    }
    if(error)
    {
        return(
            <section>
                <p className={classes.loading}>{error}</p>
            </section>
        )
    }

    return (
        <section className={classes.meals} >
            <Card>
                <ul>
                    {meals.map((meal) => { 
                        return( 
                        <MealItem
                        key={meal.id}
                        id={meal.id}
                        name={meal.name}
                        description={meal.description}
                        price={meal.price}
                        /> 
                        )})}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals