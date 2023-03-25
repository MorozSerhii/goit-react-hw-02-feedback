import styled from 'styled-components';
export const Text = styled.p`
  font-weight: bold;
`;

export const ProcStyle = styled.span`
  color: ${props =>
    props.children[0] > 79
      ? 'green'
      : props.children[0] > 49
      ? 'orange'
      : 'red'};
  };
`;
