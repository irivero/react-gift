import { useState } from "react"
import './styles.css'
import { AddCategory, GiftGrid } from "./components"

export const GiftExpertApp =() => {
    const [categories, setCategories] = useState([])
    const onAddCategory = (newcategory) => {
        if(categories.includes(newcategory.toUpperCase())) return;
        setCategories(cat => [newcategory.toUpperCase(), ...cat]);
    }
    return (
        <>
        <h1> Gift Expert App </h1>
        < AddCategory 
            //setCategories= {setCategories}
            onNewValue = {onAddCategory}
        />
        <div>
            <ol>
            { 
                categories.map(c => 
                    <GiftGrid key={c} category={c}/>
                )
            }
            </ol>            
        </div>
        </>
    )
}