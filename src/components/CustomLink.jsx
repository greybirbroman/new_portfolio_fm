

const CustomLink = ({ label, onClick, variant }) => {
  return (
    <button
      className={`py-4 px-5 capitalize rounded-lg sm:text-xl ring-1 ring-white cursor-pointer ${
        variant === 'white' ? 'bg-white text-black' : 'bg-transparent'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export { CustomLink };
