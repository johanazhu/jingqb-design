import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * 单个列表
 * @param {className} string 单个列表样式名
 * @param {children} any 渲染的内容
 * @param {style} object 单个列表的样式
 * @param {onClick} function 点击列表后的回调
 **/

export interface ListProps {
  className?: string;
  children?: any;
  style?: React.CSSProperties;
  onClick?: (e: any) => void;
}

const Alone = (props: ListProps) => {
  const { className, children, style, onClick } = props;

  return (
    <div
      className={classnames('jqb-list__alone', className)}
      style={style}
      onClick={e => {
        // tslint:disable-next-line:no-unused-expression
        onClick && onClick(e);
      }}
    >
      {children}
    </div>
  );
};

Alone.defaultProps = {
  className: '',
  style: null,
  onClick: function() {},
};

Alone.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default React.memo(Alone);
