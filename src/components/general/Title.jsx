import React from 'react'
import styled from 'styled-components';

function Title({title}) {
  return (
    <Container>{title}</Container>
  )
}

export default Title

const Container = styled.p`
    font-family: 'DMSansmedium';
    font-size: 22px;
    color: #0A0A0A;
`;