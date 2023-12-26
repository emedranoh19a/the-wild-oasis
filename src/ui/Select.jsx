import styled from "styled-components";
import propTypes from "prop-types";
const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

//value is the active value
function Select({ options, value, onChange, ...otherProps }) {
  return (
    <StyledSelect value={value} onChange={onChange} {...otherProps}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

Select.propTypes = {
  options: propTypes.array,
  value: propTypes.string,
  onChange: propTypes.func,
  otherProps: propTypes.object,
};
export default Select;
