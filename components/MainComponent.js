import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import  { CONTENTS } from '../shared/contents';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contents:  CONTENTS
        };
    }

    render() {
        return <Directory contents={this.state.contents} />
    }

}

export default Main; 