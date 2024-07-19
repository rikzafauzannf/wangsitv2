import React from 'react'

const InputField = React.forwardRef(({ label, type, placeholder, ...rest }, ref) => {
  return (
    <label className="form-control w-full">
        <div className="label">
            <span className="label-text">{label}</span>
        </div>
        <input type={type} placeholder={placeholder} className="input w-full shadow-md" {...rest} ref={ref} />
    </label>
  )
})

export default InputField