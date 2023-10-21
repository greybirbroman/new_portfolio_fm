const Input = ({ name, type, placeholder, onChange, value }) => {
  return (
    <input
      name={name}
      type={type || 'text'}
      placeholder={placeholder}
      onChange={onChange}
      value={value || ''}
      className='p-5 bg-transparent border border-white rounded-lg outline-none focus:ring focus:ring-orange-500'
    />
  );
};

export { Input };
