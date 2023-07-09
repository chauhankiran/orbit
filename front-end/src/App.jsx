import { BrowserRouter, Routes, Route } from "react-router-dom";

import Companies from "./pages/Companies";
import AddCompany from "./pages/AddCompany";
import ShowCompany from "./pages/ShowCompany";

import Contacts from "./pages/Contacts";
import AddContact from "./pages/AddContact";
import ShowContact from "./pages/ShowContact";

import Deals from "./pages/Deals";
import AddDeal from "./pages/AddDeal";
import ShowDeal from "./pages/ShowDeal";

import Quotes from "./pages/Quotes";
import AddQuote from "./pages/AddQuote";
import ShowQuote from "./pages/ShowQuote";

import Tickets from "./pages/Tickets";
import AddTicket from "./pages/AddTicket";
import ShowTicket from "./pages/ShowTicket";

import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import ShowTask from "./pages/ShowTask";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/companies" element={<Companies />} />
        <Route path="/companies/add" element={<AddCompany />} />
        <Route path="/companies/:id" element={<ShowCompany />} />

        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts/add" element={<AddContact />} />
        <Route path="/contacts/:id" element={<ShowContact />} />

        <Route path="/deals" element={<Deals />} />
        <Route path="/deals/add" element={<AddDeal />} />
        <Route path="/deals/:id" element={<ShowDeal />} />

        <Route path="/quotes" element={<Quotes />} />
        <Route path="/quotes/add" element={<AddQuote />} />
        <Route path="/quotes/:id" element={<ShowQuote />} />

        <Route path="/tickets" element={<Tickets />} />
        <Route path="/tickets/add" element={<AddTicket />} />
        <Route path="/tickets/:id" element={<ShowTicket />} />

        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/add" element={<AddTask />} />
        <Route path="/tasks/:id" element={<ShowTask />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
