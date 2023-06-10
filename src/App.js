import {
  Routes,
  Route,
} from "react-router-dom";
import Postpage from "./pages/post";
import Getpage from "./pages/get";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Postpage />} />
      <Route path="post" element={<Postpage />} />
      <Route path="get" element={<Getpage />} />
      <Route path="/*" element={<Postpage />} />
    </Routes>
    </>
  );
}

export default App;
