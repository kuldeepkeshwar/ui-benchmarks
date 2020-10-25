import React from 'react';
import { Box } from 'rebass';

const View = props => {
  return (
    <Box
      alignItem="stretch"
      borderWidth="0"
      borderStyle="solid"
      boxSizing="border-box"
      display="flex"
      flexBasis="auto"
      // flexDirection="column"
      flexShrink="0"
      margin="0"
      padding="0"
      minHeight="0"
      minWidth="0"
      {...props}
    />
  );
};

export default View;
