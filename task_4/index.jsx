import { useState } from "react";

const MouseEnterWrapper = ({ cb, children }) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    cb();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {children}
    </div>
  );
};

//! Опечатка в пропсах всех Block компонентов. Не стал править для совместимости с песочницей
export const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => (
  <MouseEnterWrapper cb={mouseEnterCallbak}>
    <img src={imgSrc} alt={imgAlt} />
  </MouseEnterWrapper>
);

export const Block2 = ({ mouseEnterCallbak, content }) => (
  <MouseEnterWrapper cb={mouseEnterCallbak}>
    <p>{content}</p>
  </MouseEnterWrapper>
);

export const Block3 = ({ mouseEnterCallbak, userData }) => (
  <MouseEnterWrapper cb={mouseEnterCallbak}>
    <address>
      country: {userData.country}, street: {userData.street}
    </address>
  </MouseEnterWrapper>
);
