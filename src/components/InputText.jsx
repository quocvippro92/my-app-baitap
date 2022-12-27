const InputText = ({
  inputClass = "",
  lable,
  placeholder,
  name,
  value,
  onChange,
  error = "",
}) => {
  const checkInputClass = () => {
    if (!value) return "";
    if (value && error) return " inputText--error";
    if (value && !error) return " inputText--valid";
  };
  return (
    <>
    <div className={`inputText ${inputClass}${checkInputClass()}`}>
      <lable htmlFor={name}><strong>{lable}</strong></lable>
      <input
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        onChange={onChange}
      />
    </div>
      <div className="error">{error}</div>
    </>
  );
};
export default InputText;
