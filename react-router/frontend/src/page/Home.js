const { Link } = window.ReactRouterDOM;

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <React.Fragment>
            <div>
                Hello, Kumiho!
            </div>
            <div>
                <Link to="/get-set">/get-set</Link>
            </div >
        </React.Fragment>
    }
}

export default Home;