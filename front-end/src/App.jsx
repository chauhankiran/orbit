import { BrowserRouter, Routes, Route } from "react-router-dom";

import Companies from "./pages/Companies";
import AddCompany from "./pages/AddCompany";

import Contacts from "./pages/Contacts";
import AddContact from "./pages/AddContact";

import Deals from "./pages/Deals";
import AddDeal from "./pages/AddDeal";

import Quotes from "./pages/Quotes";
import AddQuote from "./pages/AddQuote";

import Tickets from "./pages/Tickets";
import AddTicket from "./pages/AddTicket";

import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/companies" element={<Companies />} />
        <Route path="/companies/add" element={<AddCompany />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts/add" element={<AddContact />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/deals/add" element={<AddDeal />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/quotes/add" element={<AddQuote />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/tickets/add" element={<AddTicket />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/add" element={<AddTask />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
