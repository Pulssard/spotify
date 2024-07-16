
const Input = ({handleChange, invalidInput, ...props}) => {
  return <input onChange={(e) => handleChange(e.target.value)} className={`bg-white border-2 rounded w-72 h-10 border-green-700 py-2 px-3 ${invalidInput ? 'invalid-input' : ''}`} {...props}/>
}

export default Input