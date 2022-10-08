import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)
  const checkBoxRef = useRef<HTMLInputElement>(null)

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        onClick={() => checkBoxRef.current?.click()}
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
        })}
      />
      <input
        id={inputId}
        ref={checkBoxRef}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        onChange={() => onChange(!checked)}
      />
    </div>
  )
}
