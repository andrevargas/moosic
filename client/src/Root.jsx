import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './scenes/Login';
import Main from './scenes/Main';
import Content from './components/Content';
import AppBar from './components/AppBar';
import Drawer from './components/Drawer';
import { navigate } from './redux/ducks/scenes';

class Root extends Component {

    constructor() {
        super();
        this.state = { drawerOpen: false };
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer(open) {
        this.setState({ drawerOpen: open });
    }

    renderScene() {
        switch (this.props.currentScene) {
            case 'main':
                return <Main />;
            default:
                return null;
        }
    }

    render() {
        const { user } = this.props;
        if (user.isLoggedIn) {
            return (
                <div>
                    <Drawer
                        open={this.state.drawerOpen}
                        onChange={this.toggleDrawer}
                        user={user}
                    />
                    <AppBar
                        title="Moosic"
                        onMenuPress={() => this.toggleDrawer(true)}
                    />
                    <Content>
                        {this.renderScene()}
                    </Content>
                </div>
            );
        } else {
            return <Login />
        }
    }

}

const mapStateToProps = (state) => ({
    user: state.user,
    currentScene: state.scenes.currentScene
});

const mapDispatchToProps = (dispatch) => ({
    navigate: scene => dispatch(navigate(scene))
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);