function SetInput({Title,Name, Type, Id, value,styleInput,styleLabel,onChange}) {
    return (
        <label htmlFor={Id} className={styleLabel}>
            {Title}
            <input type={Type} name={Name}  id={Id} value={value} className={styleInput} onChange={onChange}/>
          </label>
      )
}
export default  SetInput;