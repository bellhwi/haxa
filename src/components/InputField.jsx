function InputField({
  isSelector,
  isAddMode,
  id,
  name,
  width,
  inputWidth,
  defaultValue,
  readOnly,
}) {
  return (
    <div className='edit-inputContainer' style={{ width: width }}>
      <label htmlFor={name.toLowerCase().trim()}>{name} </label>
      {isSelector ? (
        <select
          className='input-style edit-input'
          defaultValue={defaultValue}
          style={{ padding: '8px 4px', letterSpacing: '0.5px' }}
          id={id}
        >
          {isAddMode ? (
            <option value='none' defaultValue disabled hidden>
              Select a category
            </option>
          ) : null}
          <option value='clones'>Clones</option>
          <option value='premiums'>Premiums</option>
          <option value='seeds'>Seeds</option>
          <option value='coming'>Coming Soon</option>
        </select>
      ) : readOnly ? (
        <input
          type='text'
          className='input-style edit-input'
          id={id}
          style={{ width: inputWidth, cursor: 'default', color: '#a9a9a9' }}
          defaultValue={defaultValue}
          readOnly
        />
      ) : (
        <input
          type='text'
          className='input-style edit-input'
          id={id}
          style={{ width: inputWidth }}
          defaultValue={defaultValue}
        />
      )}
    </div>
  )
}

InputField.defaultProps = {
  isSelector: false,
  isAddMode: false,
}

export default InputField
