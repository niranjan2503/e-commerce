const FormField = ({
    label,
    id,
    value,
    onChange,
    onBlur,
    type,
    error,
    touched,
    placeholder,
    children,
}) => {
    return (
        <div className="form-field">
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <input
                type={type}
                id={id}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                onBlur={onBlur}
                className={
                    error && touched
                        ? "form-input input-error"
                        : !error && touched
                        ? "form-input input-success"
                        : "form-input"
                }
            />
            {children}
            {error && touched && <p className="input-error-msg">{error}</p>}
        </div>
    );
};
export default FormField;
