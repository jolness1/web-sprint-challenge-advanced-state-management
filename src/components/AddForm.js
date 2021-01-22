import React from 'react';
import {postSmurf, getSmurf, setErrorMessage} from '../actions/index'
import { connect } from 'react-redux';

class AddForm extends React.Component {
    constructor() {
        super();
        this.state = {
            id: Date.now(),
            name:'',
            position:'',
            nickname:'',
            description:'',
        }
    }

    handleChange = (evt) => {
        const value = evt.target.value;
        this.setState({
            ...this.state,
            [evt.target.name]: value
        });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(this.state);
        if (this.state.name &&
            this.state.position && 
            this.state.nickname) {
                this.props.postSmurf(this.state);
                this.setState({
                    name:'',
                    position:'',
                    nickname:'',
                    description:'',
                });
            } else {
                this.props.setErrorMessage("Please Fill Entire Form");
            }
    }

    render() {
        return(<section>
            <h2>Add Smurf</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input onChange={this.handleChange} value={this.state.name} name="name" id="name" />
                    <label htmlFor="position">Position:</label><br/>
                    <input onChange={this.handleChange} value={this.state.position} name="position" id="position" />
                    <label htmlFor="nickname">Nickname:</label><br/>
                    <input onChange={this.handleChange} value={this.state.nickname}  name="nickname" id="nickname" />
                    <label htmlFor="description">Description:</label><br/>
                    <input onChange={this.handleChange} value={this.state.description} 
                    name="description" id="description" />
                </div>
                {/* {this.props.error &&
                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error:{this.props.error} </div>
                } */}
                <button onClick={this.handleSubmit}>Submit Smurf</button>
            </form>
        </section>);
    }
}

const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    
    }
}


export default connect(mapStateToProps,{postSmurf, getSmurf, setErrorMessage }) (AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.