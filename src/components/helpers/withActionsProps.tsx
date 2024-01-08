import React from "react";
import { Buttons, ButtonsProps } from "./button";

export const handleCancel = () => {
  // reset logic
  console.log("Cancel");
};

export const handleSave = () => {
  // save logic
  console.log("Save");
};

export const handleRemove = () => {
  // remove logic
  console.log("Remove");
};

// define props for the withactions component
interface WithActionsProps extends ButtonsProps {
  children: React.ReactNode; //children components to wrap
}

// higher order component to handle common actions
export const WithActions: React.FC<WithActionsProps> = ({
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
    if (onCancel && typeof onCancel === "function") {
      // cancel logic
      onCancel();
      console.log("cancel");
    }
  };
  const handleSave = () => {
    if (onSave && typeof onSave === "function") {
      onSave();
      console.log("save");
    }
  };
  const handleRemove = () => {
    if (onRemove && typeof onRemove === "function") {
      onRemove();
      console.log("remove");
    }
  };
  return (
    <div>
      {/* render children components //render button components w/
      passed props*/}
      {children}
      {/* Render Buttons component with passed props */}
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


