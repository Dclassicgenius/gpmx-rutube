type ButtonType = "button" | "submit" | "reset" | undefined;
interface ButtonProps {
  children: React.ReactNode;
  handleClick?: () => void;
  styles: string;
  type?: ButtonType;
  title: string;
  disabled?: boolean;
  active?: boolean;
  activeStyles?: string;
}

const Button = (props: ButtonProps) => {
  const baseClassNames = `${props.styles} font-bold`;
  const activeClassNames = props.active
    ? `${baseClassNames} ${props.activeStyles}`
    : baseClassNames;
  const disabledClassNames = props.disabled
    ? `${baseClassNames} cursor-not-allowed opacity-50`
    : activeClassNames;
  return (
    <button
      onClick={props?.handleClick}
      className={disabledClassNames}
      type={props?.type}
      title={props.title}
      disabled={props?.disabled}
      aria-disabled={props?.disabled}
      aria-label={props.title}
    >
      {props.children}
    </button>
  );
};

export default Button;
export type { ButtonProps };
