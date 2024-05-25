const Button = (props) => {
  const { bgcolor = "blue", color = "white", children, onClick, style } = props;
  return (
    <button
      style={{
        padding: "8px 16px",
        border: "none",
        borderRadius: 4,
        outline: "none",
        backgroundColor: bgcolor,
        color: color,
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
