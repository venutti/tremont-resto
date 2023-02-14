export default function StyleButton({ children, className, ...rest }) {
  const classes =
    "transition-colors border-2 border-white text-white rounded-full hover:bg-white hover:text-slate-900 " +
    (className || "");
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
