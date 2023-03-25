import styled from 'styled-components';
export const Wraper = styled.div`
  display: flex;
  gap: 15px;
`;

export const Btn = styled.button`
  --bg: #e74c3c;
  --text-color: #fff;
  position: relative;
  width: 150px;
  border: none;
  background: var(--bg);
  color: var(--text-color);
  padding: 1em;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.2s;
  border-radius: 5px;
  opacity: 0.8;
  letter-spacing: 1px;
  box-shadow: #c0392b 0px 7px 2px, #000 0px 8px 5px;
  transition: all 250ms linear;

  &:active {
    top: 4px;
    box-shadow: #c0392b 0px 3px 2px, #000 0px 3px 5px;
  }
  &:hover {
    opacity: 1;
  }
`;
