import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/fontawesome-free";
import { faTrash, faSave, faXmark } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

// define the structure shape of an object. describes props.
interface ButtonsProps {
  onCancel: () => void;
  onSave: () => void;
  onRemove: () => void;
  cancelText: string;
  saveText: string;
  removeText: string;
}

export const Buttons = ({ onCancel, onSave, onRemove, cancelText, saveText, removeText }: ButtonsProps) => {
  return (
    <div className="buttons">
      <button className="delete" onClick={onRemove} type="button">
        <FontAwesomeIcon icon={faTrash as IconDefinition} />
        {removeText}
      </button>
      <button className="save" onClick={onSave} type="button">
        <FontAwesomeIcon icon={faSave as IconDefinition} />
        {saveText}
      </button>
      <button className="cancel" onClick={onCancel} type="button">
        <FontAwesomeIcon icon={faXmark as IconDefinition} />
        {cancelText}
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
