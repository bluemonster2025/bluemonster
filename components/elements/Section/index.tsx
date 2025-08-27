import { ElementType, ReactNode } from "react";
import { Title } from "../Texts";

interface Props {
  children?: ReactNode;
  className?: string;
  id?: string;
  title?: ReactNode;
  subtitle?: ReactNode | string;
  asTag?: ElementType;
  noPadding?: boolean;
}

export const Section = ({
  children,
  className,
  id,
  title,
  subtitle,
  asTag: Tag = "section",
  noPadding = false,
}: Props) => {
  const getClass = () =>
    `${!noPadding && "px-5"} w-full max-w-6xl 3xl:max-w-[100rem] mx-auto`;

  return (
    <Tag id={id} className={className}>
      <div className={getClass()}>
        {title ? (
          <Title
            as="h2"
            className="normal-case text-grayscale-400 text-[24px]/[32px] font-semibold mb-6"
          >
            {title}
          </Title>
        ) : null}
        {subtitle ? (
          <Title className="text-base font-semibold text-grayscale-600 normal-case">
            {subtitle}
          </Title>
        ) : null}
        {children}
      </div>
    </Tag>
  );
};
