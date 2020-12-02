import styles from './index.css';

function BasicLayout(props) {
  if (props.location.pathname.startsWith('/router')) {
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>路由例子</h1>
        {props.children}
      </div>
    );
  }

  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi! 这里是全局layout</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
