import React from 'react';
import styled from 'styled-components';
import { wrapperStyles } from '@common/styles';

const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 20;
`;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${wrapperStyles()};
`;

const Section = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 769px) {
    &:not(:first-of-type) {
      padding-left: 20px;
    }
  }

  @media (max-width: 768px) {
    &:not(:first-of-type) {
      padding-left: 10px;
    }
  }
`;

const Item = styled.div`
  flex-grow: 1;
  text-align: center;
  
  @media (min-width: 769px) {
    &:not(:first-of-type) {
      padding-left: 40px;
    }
  }

  @media (max-width: 768px) {
    &:not(:first-of-type) {
      padding-left: 0px;
      padding-right: 20px;
    }
  }
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  border-bottom: 1px solid white;
  font-size: 0.9rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Logo = styled.div`
  border-radius: 10px;
  height: 92px;
  width: 92px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  flex-shrink: 0;
  font-size: 1.2rem;
  font-weight: 700;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LogoImage = styled.img`
  width: 100%;
`;

const Illustration = styled.img`
  position: absolute;
  text-align: center;
  z-index: -1;
  max-width: 80%;
  top: 0px;
  left: 10%;

  @media (min-width: 1450px) {
    left:20%;
    max-width: 60%;
  }

  @media (max-width: 768px) {
    left: 0px;
    top: 0px;
    max-width: 150%;
  }
`;

StyledHeader.Wrapper = Wrapper;
StyledHeader.Section = Section;
StyledHeader.Item = Item;
StyledHeader.Link = Link;
StyledHeader.Logo = Logo;
StyledHeader.LogoImage = LogoImage;
StyledHeader.Illustration = Illustration;

export { StyledHeader };
