import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const __container = styled.div`
  padding: 4%;
  border: 1px solid #ddd;
  background-color: blue;
  width: 100%;
`;

export default class DropZone extends React.Component {

  render() {
    return (
      <__container>
            This is the #dropzone
      </__container>
    );
  }

}
