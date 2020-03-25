import './index.less';

import Input from './input';

import Group from './group';
import Textarea from './textarea';
import Verify from './verify';
import Prefix from './prefix';
import Suffix from './suffix';
import Phone from './phone';
import Password from './password';
import Search from './search';
import Clear from './clear';

// ts 中 函数 上写静态方法会有提示，但并不影响使用
// 可用 类 的写法避免（类支持静态方法）
Input.Group = Group;
Input.Textarea = Textarea;
Input.Verify = Verify;
Input.Prefix = Prefix;
Input.Suffix = Suffix;
Input.Phone = Phone;
Input.Password = Password;
Input.Search = Search;
Input.Clear = Clear;

export default Input;
