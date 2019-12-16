import React, { Component } from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
// import {Link} from 'react-router-dom'
import { View, Image } from 'react';
import { limitTitle } from './Text-limit'
import "./Container.css"
export default class playlist extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         list: [],
    //         error: null
    //     }
    // }

    // buildList =(data)=>{
    //     console.log(data.playlist);
    //     this.setState({list: data.playlist})
    // }

    // componentDidMount(){
    //     console.log('did mount')
    //    //let url = 'https://prof3ssorst3v3.github.io/media-sample-files/products.json';
    //     let url = 'https://s3.amazonaws.com/frankly-news-web/test/playlist.json';
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(this.buildList)
    //     .catch(error => {
    //         this.setState({error});
    //     })
    // }

    render() {
        console.log('render')
        return (
            <div className="playlist">
                {this.props.playlist.length > 0 &&
                    this.props.playlist.map((item, index) => (
                        <div key={'pl_' + index}
                        onClick={(event)=>this.props.setVideo(index)}
                        >

                            <img
                                className="port-image"
                                alt=""
                                src={item.image_url}
                                style={{ width: "140px", height: "150px", objectFit: "cover", padding: "5px"}}
                            />
                            {/* <p>{limitTitle(this.props.title, 20)}</p> */}
                            <p className="title">{item.title}</p>
                        </div>
                    ))
                }

            </div>
        )
    }
}

