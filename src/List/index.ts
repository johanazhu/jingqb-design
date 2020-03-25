import './index.less';

import List from './list';

import Group from './group';
import Double from './double';
// import Link from './link';
import Item from './item';
import Alone from './alone';

// ts 中 函数 上写静态方法会有提示，但并不影响使用
// 可用 类 的写法避免（类支持静态方法）
List.Group = Group;
List.Double = Double;
// List.Link = Link;
List.Item = Item;
List.Alone = Alone;

export default List;
