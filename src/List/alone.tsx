import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * 基础List
 * @param {className} string 列表组件样式名
 * @param {children} any 渲染的内容
 * @param {style} object input 的样式
 * @param {onClick} function 点击 Link 后的回调
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
