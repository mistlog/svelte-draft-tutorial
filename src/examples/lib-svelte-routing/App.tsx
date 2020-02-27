import { Router, Route } from "svelte-routing";
import NavLink from "./components/NavLink";
import Home from "./routes/Home.svelte";
import About from "./routes/About.svelte";
import Blog from "./routes/Blog.svelte";

export default function App()
{
    <Router>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="blog">Blog</NavLink>
        </nav>
        <div>
            <Route path="about" component={About} />
            <Route path="blog/*" component={Blog} />
            <Route path="/" component={Home} />
        </div>
    </Router>
}