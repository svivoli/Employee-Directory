import React from "react";
import SearchArea from "../SearchArea";
import Table from "../Table";
import "./style.css";
import API from "../../utils/API";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            myProp: 'test',
            employees: {}
        }
    };

    componentDidMount() {
        API.search().then((res) => {
           const employees = res.data.results;
           this.setState({ employees: employees })
        });
    }

    render() {
        return (
            <div>
            <SearchArea />
            <Table data={this.state} propTest={this.state.myProp} />
            </div>
        );
    };
};

export default Main;