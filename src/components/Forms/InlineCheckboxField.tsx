interface Props {
  label: string;
}

const InlineCheckboxField: React.FC<Props> = (props) => {
  return (
    <label className="inline-flex items-center gap-1.5" role="button">
      <input className="form-checkbox rounded border-2 border-slate-300 text-lime-600 focus:ring-slate-400/50 focus:ring-1 focus:ring-offset-1 cursor-pointer"
        type="checkbox"
        name={props.name}
        checked={field.checked}
        onChange={field.onChange}
      />
      <span className="text-sm select-none" role="note">{props.label}</span>
    </label>
  )
}

export default InlineCheckboxField;