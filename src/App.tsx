import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import ContactDetail from "./pages/ContactDetail";
import ContactList from "./pages/ContactList";
import EditContact from "./pages/EditContact";

const Layout = () => {
  return <Outlet />;
};
//CreateBrowserRouter
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ContactList />} />
          <Route path="/:contactId">
            <Route index element={<ContactDetail />} />
            <Route path="/:contactId/edit" element={<EditContact />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
