import "./input-field.scss";

function InputField({type, name, value, handleInput, error}: any) {
  let inputTypeElement;
  switch(type){
    case "checkbox":
      inputTypeElement = (
        <>  
        <label>{name}</label>
        <input 
          type={type}  
          name={name}
          checked={value}
          onChange={e => handleInput(e, true)}
        />
        </>
      )
      break;
    default:
      inputTypeElement = ( 
        <>
        <label htmlFor="id">{name}</label>
        <input
          id="id" 
          type={type}  
          name={name}
          value={value}
          onChange={e => handleInput(e)}
        />
        </>
      )
    break;
  }
  return (
    <div className="input-container">
        {inputTypeElement}
        <div className="errors">{error}</div>
    </div>
  )
}

export default InputField