import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const P = styled.p.attrs((props) => ({
  className: `text-${props.color || 'primary'}`,
}))``;

export const Link = styled(P).attrs((props) => ({
  as: RouterLink,
  to: props.to,
  className: `underline hover:text-secondary hover:cursor-pointer text-sm`,
}))``;

export default Link;
