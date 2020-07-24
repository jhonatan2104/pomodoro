import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Label } from '..';
// eslint-disable-next-line prettier/prettier
import {
  Container, Tag, Wrapper, CompleteContainer, Icon
} from './styles';

import theme from '~/theme';

const Task = (props) => {
  const [checked, setChecked] = useState(false);
  return (
    <Box
      roundedSm
      row
      height={80}
      alignCenter
      justifyBetween
      bg={theme.colors.components.primary}
      paddingVertical={16}
      paddingHorizontal={12}
      {...props}
    >
      <Wrapper>
        <Tag
          backgroundColor={`${theme.colors.importancy.red}20`}
          borderColor={theme.colors.importancy.red}
        />
        <Container>
          <Label color="#fff" size={18}>
            Task name
          </Label>
          <Label color="#fff" size={16}>
            30 minutes
          </Label>
        </Container>
      </Wrapper>

      <CompleteContainer>
        <Tag
          backgroundColor="#c4c4c420"
          activeOpacity={1}
          onPress={() => {
            setChecked(!checked);
          }}
        >
          <Icon
            style={{ display: checked ? 'flex' : 'none' }}
            name="check"
            size={32}
          />
        </Tag>
      </CompleteContainer>
    </Box>
  );
};

Task.propTypes = {
  ml: PropTypes.oneOfType([PropTypes.number]),
  mr: PropTypes.oneOfType([PropTypes.number]),
  mt: PropTypes.oneOfType([PropTypes.number]),
  mb: PropTypes.oneOfType([PropTypes.number]),
};

Task.defaultProps = {
  mt: 0,
  mb: 0,
  mr: 0,
  ml: 0,
};

export default Task;
