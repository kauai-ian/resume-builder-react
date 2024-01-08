import React from "react";
import { Buttons, ButtonsProps } from "./Buttons";

// define props for the withactions component
interface WithActionsProps extends ButtonsProps {
  children: React.ReactNode; //children components to wrap
  //additional props specific to each component
}

// higher order component to handle common actions
const WithActions: React.FC<WithActionsProps> = ({
  children,
  onCancel,
  onSave,
  onRemove,
  cancelText,
  saveText,
  removeText,
}: WithActionsProps) => {
  //common logic actions
  const handleCancel = () => {
    //reset
    if (onCancel && typeof onCancel === "function")
      // cancel logic
      onCancel();
    console.log("cancel");
  };
  const handleSave = () => {
    if (onSave && typeof onSave === "function") 
    onSave();
    console.log("save");
  };
  const handleRemove = () => {
    if (onRemove && typeof onRemove === "function") 
    onRemove();
    console.log("remove");
  };
  return (
    <div>
      {children} // render children components //render button components w/
      passed props
      <Buttons
        onCancel={handleCancel}
        onSave={handleSave}
        onRemove={handleRemove}
        cancelText={cancelText}
        saveText={saveText}
        removeText={removeText}
      />
    </div>
  );
};

export default WithActions;
