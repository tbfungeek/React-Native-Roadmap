import { HashRouter, NavLink } from "react-router-dom";
export function MainMenu(props) {
  return (
    <div>
      <HashRouter>
        <nav>
          <ul>
            <li>
              <a>
                <NavLink to="/useState">useState用法</NavLink>
              </a>
            </li>

            <li>
              <a>
                <NavLink to="/useContext">useContext用法</NavLink>
              </a>
            </li>

            <li>
              <a>
                <NavLink to="/useshareContext">共享Context用法</NavLink>
              </a>
            </li>

            <li>
              <a>
                <NavLink to="/usereducer">useReducer用法</NavLink>
              </a>
            </li>

            <li>
              <a>
                <NavLink to="/useEffect">useEffect用法</NavLink>
              </a>
            </li>

            <li>
              <a>
                <NavLink to="/customhook">自定义Hook用法</NavLink>
              </a>
            </li>

            <li>
              <a>
                <NavLink to="/artical_list">
                  React Hook 技术相关文章推荐列表
                </NavLink>
              </a>
            </li>
          </ul>
        </nav>
        {props.children}
      </HashRouter>
    </div>
  );
}
