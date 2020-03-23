import React from "react";
import Table from "../Table";
import "./style.css";
// import API from "../../utils/API";

class Main extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state= {
    //         employees: {}
    //     }
    // };

    // componentDidMount() {
    //     API.search().then(res => {
    //        const employees = res.data.results;
    //        this.setState({ employees: employees })
    //     });
    // }

    render() {
        return (
            <div>
            <Table data={this.state} />
            </div>
        );
    };
};

export default Main;