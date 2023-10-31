import "./input-field.scss";

function InputField({type, name, value, setValue}: any) {
  return (
    <div className="input-container">
        <input 
          type={type}  
          name={name}
          value={value}
          onChange={e => setValue(e.target.value)}
          required 
        />
        <label>{name}</label>
    </div>
  )
}

export default InputField