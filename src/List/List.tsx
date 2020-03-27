import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import Loading from '../Loading';

/**
 * List 列表组件
 * @param {className} string 列表组件样式名
 * @param {children} any 渲染的内容
 * @param {style} object 列表组件的样式
 * @param {bordered} boolean 是否展示上下变宽，默认展示
 * @param {header} ReactNode 列表组件头部自定义
 * @param {footer} ReactNode 列表组件尾部自定义
 * @param {isLoading} boolean 拉取数据时显示 loading 图标，数据拉取完毕显示内容
 * @param {dataSource} any 数据源
 * @param {renderItem} ReactNode 当有数据源时，自定义渲染列表项
 **/

export interface ListProps {
  className?: string;
  children?: any;
  style?: React.CSSProperties;
  bordered?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  isLoading?: boolean;
  dataSource?: any;
  renderItem?: (item: any, index: number) => React.ReactNode;
}

const List = (props: ListProps) => {
  const {
    className,
    children,
    style,
    bordered,
    header,
    footer,
    isLoading,
    dataSource,
    renderItem,
  } = props;

  const splitDataSource = [...dataSource];

  const renderItemRender = (item: any, index: number) => {
    if (!renderItem) return null;
    return renderItem(item, index);
  };

  let childrenRender;
  childrenRender = isLoading && <div style={{ minHeight: 53 }} />;

  if (splitDataSource.length > 0) {
    const items = splitDataSource.map((item: any, index: number) => renderItemRender(item, index));

    const childrenList: Array<React.ReactNode> = [];
    React.Children.forEach(items, (child: any, index) => {
      childrenList.push(
        React.cloneElement(child, {
          key: index,
        }),
      );
    });
    childrenRender = <ul className="jqb-list__items">{childrenList}</ul>;
  } else {
    childrenRender = <div>骨架屏, 暂时没时间做</div>;
  }

  const rootRender = isLoading ? <Loading /> : childrenRender;
  return (
    <div
      className={classnames('jqb-list', { 'jqb-list__border': bordered }, className)}
      style={style}
    >
      {header && <div className="jqb-list__header">{header}</div>}
      {rootRender}
      {children}
      {footer && <div className="jqb-list__footer">{footer}</div>}
    </div>
  );
};

List.defaultProps = {
  className: '',
  style: null,
  bordered: false,
  header: '',
  footer: '',
  isLoading: false,
  dataSource: [],
};

List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.object,
  bordered: PropTypes.bool,
  header: PropTypes.node,
  footer: PropTypes.node,
  isLoading: PropTypes.bool,
  dataSource: PropTypes.array,
  renderItem: PropTypes.any,
};

export default React.memo(List);
