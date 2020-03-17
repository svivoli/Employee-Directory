import React from "react";
import SearchArea from "../SearchArea";
import Table from "../Table";
import "./style.css";
import API from "../../utils/API";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            birthday: "",
            email: "",
            data: {} //null
        }
    };

    componentDidMount() {
        API.search().then((results) => {
            console.log(results);
            this.setState({ data: results })
        })
    }

    render() {
        return (
            <div>
            <SearchArea />
            <Table data={this.state.data}/>
            </div>
        );
    };
};

export default Main;