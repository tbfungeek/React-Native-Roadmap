import styles from './index.css';
import { List } from 'antd-mobile';
import { Link } from 'umi';

export default function() {
  return (
    <div className={styles.normal}>
      <List>
        <List.Item>
          <Link to="/hello">Hello Umi</Link>
        </List.Item>
        <List.Item>
          <Link to="/router/124">动态路由</Link>
        </List.Item>

        <List.Item>
          <Link to="/router/users/login">users/login 子路由</Link>
        </List.Item>

        <List.Item>
          <Link to="/router/users/profile">users/profile 子路由</Link>
        </List.Item>

        <List.Item>
          <Link to="/router/option/">可选路由</Link>
        </List.Item>

        <List.Item>
          <Link to="/router/users/">权限路由</Link>
        </List.Item>

        <List.Item>
          <Link to="/data/dva/">Dva</Link>
        </List.Item>

        <List.Item>
          <Link to="/data/context/">Context</Link>
        </List.Item>

        <List.Item>
          <Link to="/errorboundary/">Error Boundary</Link>
        </List.Item>

      </List>
    </div>
  );
}
