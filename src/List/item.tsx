import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '../Icon';

/**
 * Item 列表项 组件
 * @param {className} string 列表组件样式名
 * @param {children} any 渲染的内容
 * @param {style} object input 的样式
 * @param {onLink} function 点击链接后的回调
 * @param {onClick} function 点击 Link 后的回调
 * @param {hasIcon} boolean 是否展示前置图标
 **/

export interface ItemProps {
  className?: string;
  children?: any;
  style?: React.CSSProperties;
  onLink?: (e: any) => void;
  onClick?: (e: any) => void;
  hasLink?: boolean;
  renderIcon?: React.ReactNode;
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
  onLink: function() {},
  onClick: function() {},
};

Item.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.object,
  hasLink: PropTypes.bool,
  renderIcon: PropTypes.node,
  onLink: PropTypes.func,
  onClick: PropTypes.func,
};

export default React.memo(Item);
