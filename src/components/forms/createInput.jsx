/* eslint-disable react/prop-types */
function Input({
  className,
  inputName,
  type = "text",
  label,
  fn,
  value,
  placeholder = "",
}) {
  return (
    <div className={className}>
      <label htmlFor={inputName}>{label}</label>
      <input
        type={type}
        name={inputName}
        value={value}
        onChange={fn}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
