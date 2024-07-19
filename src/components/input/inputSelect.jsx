import React from 'react'

const InputSelect = React.forwardRef(({ label, inputDefault, valueSelect=[],...rest }, ref) => {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <select className="select w-full shadow-md" {...rest} ref={ref}>
        <option disabled selected>{inputDefault}</option>
        {valueSelect.map((item,index)=>(<option key={index} value={item} >{item}</option>))}
      </select>
    </label>
  )
})

export default InputSelect