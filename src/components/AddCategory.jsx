import { useState } from "react"

export const AddCategory = ({onNewValue}) => {
    const [category, setcategory] = useState('')

    const onChange = ({target}) => {
        setcategory(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if(category.trim().length === 0) return;
        onNewValue(category.trim());        
        setcategory('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input  type= "text" 
                    placeholder="Find category"
                    value={category} 
                    onChange={ onChange }
            />
        </form>
    )
}