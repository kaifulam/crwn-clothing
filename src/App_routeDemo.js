import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
//import HomePage from './pages/homepage/homepage.component';

const HomePage = (props) => {
    console.log(props);
    return (
        <div>
            <button onClick={() => props.history.push('/topics')}>Topics</button>
            <h1>HOME PAGE</h1>
        </div>
    )
};

const TopicList = (props) => {
    return (
        <div>
            <h1>Topic List PAGE</h1>
            <Link to={`${props.match.url}/13`}>To Topic 13 </Link>
            <Link to={`${props.match.url}/17`}>To Topic 13 </Link>
            <Link to={`${props.match.url}/12`}>To Topic 13 </Link>
        </div >
    )
};

// in props: history, location, match. History is the browser url history. Location.pathname is the current url path. Match.path is the Route path.

const TopicDetail = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Topic Detail PAGE: {props.match.params.topicId}</h1>
        </div>
    )
};


function App() {
    // <Route exact path component>
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/topics' component={TopicList} />
                <Route exact path='/topics/:topicId' component={TopicDetail} />
            </Switch>
        </div>
    );
}

export default App;
