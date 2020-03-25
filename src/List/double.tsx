import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Group from './group';
import List, { ListProps } from './list';

export interface DoubleProps extends ListProps {
  leftText: string;
  rightText: string;
}

const Double = (props: DoubleProps) => {
  const { className, leftText, rightText } = props;
  return (
    <Group className={classnames('jqb-list__group-double', className)}>
      <List {...props}>
        <div>{leftText}</div>
        <div>{rightText}</div>
      </List>
    </Group>
  );
};

Double.defaultProps = {
  leftText: '',
  rightText: '',
};

Double.proptypes = {
  leftText: PropTypes.string.isRequired,
  rightText: PropTypes.string.isRequired,
};

export default React.memo(Double);
