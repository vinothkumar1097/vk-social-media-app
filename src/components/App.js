import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import "../styles/app.css";
import Home from "./Home";
import About from "./About";
import NewPost from "./NewPost";
import Post from "./Post";
import Missing from "./Missing";
import EditPost from "./EditPost";
import PostLayout from "./PostLayout";
import { DataProvider } from "../context/DataContext";

const App = () => {
  return (
    <div className="App">
      <DataProvider>
        <Header title="VK Social Media App" />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" Component={About} />
            <Route path="/posts" element={<PostLayout />}>
              <Route index element={<NewPost />} />
              <Route path=":id" element={<Post />} />
              <Route path="edit/:id" element={<EditPost />} />
            </Route>
            <Route path="*" element={<Missing />} />
          </Routes>
        </main>
        <Footer />
      </DataProvider>
    </div>
  );
};
export default App;
