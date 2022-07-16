import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  
  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue( target.value );
    // SIN DESTRUCTURING
    //setInputValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if ( inputValue.trim().length <= 1) return;
    
    //setCategories( categories => [inputValue, ...categories]);
    setInputValue('');
    onNewCategory( inputValue.trim().toLowerCase() );
  }

  return (


    <form onSubmit={ onSubmit }>
      <input 
            type="text" 
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange= { onInputChange }
      />
    </form>

  )
}