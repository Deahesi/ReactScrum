import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import Layout from "./layout/Layout";
import Scrum from "./pages/Scrum";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <Router>
                    <Layout>
                        <Routes>

                            <Route path='/' element={<IndexPage/>}/>
                            <Route path='/project' element={<Scrum/>}/>

                        </Routes>
                    </Layout>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
