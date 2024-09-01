import { useEffect, useRef, useState } from "react";
import cl from "./styles.module.css";
import DropdownContent from "../DropdownContent/DropdownContent";

const Dropdown = ({ currencies, selectedCurrency, setSelectedCurrency }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    console.log(isOpen);
    setIsOpen((prev) => !prev);
  };

  const chooseCurrency = (currency) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
  };

  const handleClicksOutside = (e) => {
    if (
      isOpen &&
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  };

  const handleSpawButton = () => {};

  useEffect(() => {
    document.addEventListener("mousedown", handleClicksOutside);
    return () => {
      document.removeEventListener("mousedown", handleClicksOutside);
    };
  }, [isOpen]);

  return (
    <div className={cl.dropdown} onClick={toggleDropdown} ref={dropdownRef}>
      <div className={cl.dropdownLabel}>
        {selectedCurrency}
      </div>
      {isOpen && (
        <DropdownContent
          chooseCurrency={chooseCurrency}
          currencies={currencies}
        />
      )}
    </div>
  );
};

export default Dropdown;
