import { Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache } from "@apollo/client";

import SignIn from "./components/SingIn/SingIn";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Main from "./components/Main/Main"
import "./App.css";

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Home} />
            <Route exact path="/wandeling" component={Main} />
        </ApolloProvider>
    );
}

export default App;
