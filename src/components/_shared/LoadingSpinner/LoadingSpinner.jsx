import styled from 'styled-components';

const Loading = styled.div.attrs({
  className: `border border-solid border-gray rounded-full animate-spin my-0 mx-auto`,
})`
  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: ${(props) => props.color || 'primary'};
  width: ${(props) => props.size || '50px'};
  height: ${(props) => props.size || '50px'};

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
