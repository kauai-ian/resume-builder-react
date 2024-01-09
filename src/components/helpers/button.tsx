import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSave } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

// define the structure shape of an object. describes props.
export interface ButtonsProps {
  onSave: () => void;
  onRemove: () => void;
}

export const Buttons: React.FC<ButtonsProps> = ({
  onSave,
  onRemove,
}: ButtonsProps) => {
  return (
    <div className="buttons">
      <button className="delete" onClick={onRemove} type="button">
        <FontAwesomeIcon icon={faTrash as IconDefinition} />
        Remove
      </button>
      <button className="save" onClick={onSave} type="button">
        <FontAwesomeIcon icon={faSave as IconDefinition} />
        Save
      </button>
    </div>
  );
};

export const ButtonStyled = styled.button`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
`;

export const OutlinedButton = styled(ButtonStyled)`
  background-color: transparent;
  color: #fff;
`;
