const Select = ({options, defaultOption, value, onChange}) => {
  return (
    <select 
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option disabled value="">{defaultOption}</option>
      {options.map(option => 
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      )}
    </select>
  )
}

export default Select