import { createContext, useState } from "react"

const CategoryConext = createContext(null)

const CategoryProvider = (props) => {
    const {category, setCategory} = useState([])

    return (
        <CategoryConext.Provider value={{category, setCategory}}>
            {props.children}
        </CategoryConext.Provider>
    )
}