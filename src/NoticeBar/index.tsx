import * as React from 'react';
import * as PropTypes from 'prop-types';
import Icon from '../Icon/index';

import '../_style/index.less';
import './index.less';

export interface NoticeBarProps {
  href?: string;
  word: string;
  onClick?: () => void;
}

const NoticeBar = (props: NoticeBarProps) => {
  const { href, word, onClick } = props;

  return (
    <div className="NoticeBar">
      <a className="NoticeBar__link" href={href} onClick={onClick}>
        <p className="NoticeBar__link-text">{word}</p>
      </a>
      <Icon icon="close" size="mini" />
    </div>
  );
};

NoticeBar.propTypes = {
  href: PropTypes.string,
  word: PropTypes.string,
  onClick: PropTypes.func,
};

export default React.memo(NoticeBar);
