import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import Home from "./pages/Home/HomePage";
import Info from "./pages/Info/InfoPage";
import QrPage from "./pages/Qr/QrPage";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="info" element={<Info />} />
            <Route path="qr" element={<QrPage />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

function NoMatch() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col ">
        <h2 className="text-4xl font-bold">Nothing to see here!</h2>
        <p>
          <Link to="/">
            <div className="mt-8 w-[250px] m-auto">
              <button className="outline-none w-full text-white border-none bg-red-500 hover:bg-red-600  py-3 px-5 rounded-lg">
                Go to Home
              </button>
            </div>
          </Link>
        </p>
      </div>
    </div>
  );
}
