import React from 'react';


class Smurf extends React.Component {
    render() {
        const { smurf } = this.props;
        console.log(this.props);

        return(<div data-testid="smurf" className="card">
           <p>{smurf.name}</p>
           <p>{smurf.nickname}</p>
           <p>{smurf.position}</p>
           <p>{smurf.description}</p>
        </div>);
    }
}

export default Smurf;