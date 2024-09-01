import cl from "./styles.module.css";

const DropdownContent = ({ chooseCurrency, currencies }) => {
  return (
    <div className={cl.dropdownContent}>
      {currencies.map((currency) => (
        <a
          href="#"
          className={cl.option}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            chooseCurrency(currency);
          }}
        >
          {currency}
        </a>
      ))}
    </div>
  );
};

export default DropdownContent;
