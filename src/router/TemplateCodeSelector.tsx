import * as React from "react";
import { useAppContext, TemplateCodeKind } from "@app/context/app";

type Item = {
  displayText: string;
  value: TemplateCodeKind;
}

const list: Item[] = [
  {
    displayText: "ClassApiClient",
    value: "CLASS_BASED",
  },
  {
    displayText: "FunctionalApiClient",
    value: "FUNCTION_BASED",
  },
  {
    displayText: "CurryingFunctionalApiClient",
    value: "CURRY_FUNCTION_BASED"
  }
];

export const TemplateCodeSelector: React.FC = () => {
  const { templateCodeKind, setTemplateCodeKind } = useAppContext();

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    // console.log(event);
    setTemplateCodeKind(event.target.value as TemplateCodeKind);
  };
  return (
    <span>
      <label htmlFor="template-code">Choose Template: </label>
      <select id="template-code" value={templateCodeKind} onChange={handleChange}>
        {list.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.displayText}
            </option>
          );
        })}
      </select>
    </span>
  );
};

TemplateCodeSelector.displayName = "TemplateCodeSelector";
