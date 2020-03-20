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
        API.search().then((res) => {
            console.log(res);
            const persons = res.data.results;
            this.setState({ data: persons })
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