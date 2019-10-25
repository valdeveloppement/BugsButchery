import React from 'react';

class Loging extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAttack: false,
            isMove: false,
        };
    }

    render() {
        return <h1 className="test">loging</h1>;
    }
}

export default Loging;
