import React, { Component } from 'react';
import { connect } from 'react-redux';
import AlbumList from '../components/AlbumList';
import { fetchAlbums } from '../redux/ducks/albums';

class Main extends Component {
    componentDidMount() {
        this.props.fetchAlbuns();
    }
    render() {
        return (
            <div>
                <AlbumList albums={this.props.albums} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    albums: state.albums.items
});

const mapDispatchToProps = dispatch => ({
    fetchAlbuns: () => dispatch(fetchAlbums())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);