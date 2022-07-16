import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['futurama']);

  const onAddCategory = (newCategory) => {
    if ( categories.includes( newCategory ) ) return;
    //console.log(newCategory);
    
    setCategories([ newCategory, ...categories ]);
    //setCategories( prevCat => [ newCategory, ...prevCat] );
  }


  return (
    <>
      <h1 className="animate__animated animate__fadeInLeftBig">GifExpertApp</h1>

      <AddCategory
        // setCategories={ setCategories }
        onNewCategory={ (value) => onAddCategory(value) }
      />

      { categories.map( (category) => (
        <GifGrid key={category} 
                 category={ category } />
        ))
      }

    </>
  );
}
