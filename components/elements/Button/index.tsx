import { ButtonBase, IButtonBase } from "./ButtonBase";

export const ButtonPrimary = ({
  children,
  onClick,
  href,
  type,
  id,
  target,
}: Omit<IButtonBase, "className">) => {
  return (
    <ButtonBase
      className="bg-purplescale-50 text-white text-sm h-12 flex justify-center w-full rounded items-center"
      onClick={onClick}
      href={href}
      type={type}
      id={id}
      target={target}
    >
      {children}
    </ButtonBase>
  );
};

export const ButtonSecondary = ({
  children,
  onClick,
  href,
  type,
  id,
  target,
}: Omit<IButtonBase, "className">) => {
  return (
    <ButtonBase
      className="bg-white text-purplescale-50 h-[52px] flex justify-center w-full items-center transition-all"
      onClick={onClick}
      href={href}
      type={type}
      id={id}
      target={target}
    >
      {children}
    </ButtonBase>
  );
};
