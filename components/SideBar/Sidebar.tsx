import React from "react";
import {
  Icon,
  CloseIcon,
  Container,
  SidebarLink,
  Menu,
  Wraper,
  BtnWrapper,
  Btn,
} from "./SidebarStyle";
import { SidebarProps } from "../../type";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
  return (
    <Container isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <Wraper>
        <Menu>
          <SidebarLink href="/restaurant" onClick={toggle}>
            Restauracja
          </SidebarLink>

          <SidebarLink href="/accomodations" onClick={toggle}>
            Noclegi
          </SidebarLink>

          <SidebarLink href="/awards" onClick={toggle}>
            Nagrody
          </SidebarLink>
          <SidebarLink href="/products" onClick={toggle}>
            Produkty
          </SidebarLink>
        </Menu>
        <BtnWrapper>
          <Btn href="/contact" onClick={toggle}>
            Kontakt
          </Btn>
        </BtnWrapper>
      </Wraper>
    </Container>
  );
};

export default Sidebar;