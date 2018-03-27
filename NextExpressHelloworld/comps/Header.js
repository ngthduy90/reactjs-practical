import Link from "next/link";
import { Menu } from "antd";
import "antd/dist/antd.css";

const linkStyle = {
  marginRight: 15
};

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(this);
    console.log(e);

    this.setState({
      current: e.key
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Link href="/">
            <a style={linkStyle}>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link href="/about">
            <a style={linkStyle}>About</a>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
