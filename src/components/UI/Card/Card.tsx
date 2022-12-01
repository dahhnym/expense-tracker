import { FunctionComponent, ReactNode } from "react";
import "./Card.scss";

interface Props {
  children?: ReactNode | undefined;
  className?: string;
}

const Card: FunctionComponent<Props> = ({ children, className }) => {
  const classes = "card " + className;

  return <div className={classes}>{children}</div>;
};

export default Card;
