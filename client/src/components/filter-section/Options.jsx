import PropTypes from 'prop-types'

function Options({name,  handleClick}) {
  return (
    <label className="flex gap-4" htmlFor={name}>
    <input type="checkbox" name={name} id={name} onClick={handleClick} value={name}/>
    <span>{name}</span>
  </label>
)
}


 

Options.propTypes = {
  name:PropTypes.string.isRequired,
  handleClick:PropTypes.func.isRequired
}

export default Options
