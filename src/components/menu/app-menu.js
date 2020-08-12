import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class AppMenu extends Component {
  state = {}

  handleItemClick = ({ code } ) => {
      this.setState({ activeItem: code });
  }

  componentWillMount() {
      const pathName = window.location.pathname;
      const matchedMenu = this.props.menus.find( menu => '/' + menu.code === pathName);
      const activeItem = matchedMenu ? matchedMenu.code : 'home';
      this.setState({activeItem});
  }

  render() {
    const { activeItem } = this.state

    return (
        <Menu tabular>
            {
                this.props.menus.map( menu => {
                    return (
                        <Menu.Item
                            as={Link}
                            key={menu.code}
                            name={menu.name}
                            to={menu.code}
                            active={activeItem === menu.code}
                            onClick={this.handleItemClick.bind(this, menu)}
                            >
                            {menu.name}
                        </Menu.Item>
                    )
                })
            }
        </Menu>
    )
  }
}
