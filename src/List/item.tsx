import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '../Icon';

/**
 * Item 列表项 组件
 * @param {className} string 列表项class
 * @param {children} any 渲染的内容
 * @param {style} object 列表项的样式
 * @param {hasLink} boolean 是否有链接
 * @param {renderIcon} ReactNode 渲染前图标
 * @param {onClick} function 点击列表项后的回调
 **/

export interface ItemProps {
  className?: string;
  children?: any;
  style?: React.CSSProperties;
  hasLink?: boolean;
  renderIcon?: React.ReactNode;
  onClick?: (e: any) => void;
}

const Item = (props: ItemProps) => {
  const { className, children, style, hasLink, renderIcon, onClick } = props;

  return (
    <li
      className={classnames('jqb-list__item', className)}
      style={style}
      onClick={e => {
        // tslint:disable-next-line:no-unused-expression
        hasLink && onClick && onClick(e);
      }}
    >
      {renderIcon && <div className="jqb-list__item-icon">{renderIcon}</div>}
      <div className="jqb-list__item-content">{children}</div>
      {hasLink && (
        <div className="jqb-list__item-link">
          <Icon className="link-btn" kind="arrow" size="small" />
        </div>
      )}
    </li>
  );
};

Item.defaultProps = {
  className: '',
  style: null,
  hasLink: false,
  onClick: function() {},
};

Item.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.object,
  hasLink: PropTypes.bool,
  renderIcon: PropTypes.node,
  onClick: PropTypes.func,
};

export default React.memo(Item);
