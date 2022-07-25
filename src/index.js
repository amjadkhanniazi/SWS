import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Documentvol from './components/Documentvol';
import Confirmation from './components/Confirmation';
import Casedoc from './components/Casedoc';
import Contactinformation from './components/Contactinformation';
import Vlanding from "./components/Vlanding";
import Notification from './components/Notification';

import ContactPage from "./components/ContactPage";

import Question from './components/Question';
import Projectseditor from './components/Projectseditor';


import AllEvent from "./components/AllEventPage";
import ReportPage from "./components/ReportPage";
import DashboardApplicant from "./components/DashboardApplicant";
import Middlepage from "./components/Middlepage";
import PayMethodOptions from './components/PayMethodOptions';
import SignInSignUp from './components/SignInSignUpPage';
import ProjectDescription from './components/ProjectDescription';
import EventDescription from './components/EventDescription';
import DocumentA from './components/DocumentA';
import ApplynowRules from './components/ApplynowRules';
import Application from './components/Application';


import Dashboard from './components/Dashboard';


import AboutPage from './components/AboutPage';
import AllEventPage from './components/AllEventPage';
import AllProjectPage from './components/AllProjectPage';
import ApplynowInfo from './components/ApplynowInfo';
import CardDetail from './components/CardDetails';
import MobilePay_1 from './components/MobilePay_1';
import CashByHand from './components/CashByHand';
import ResetPasswordPage from './components/ResetPasswordPage';
import Applynowaddress from './components/Applynowaddress';
import Applynowcontact from './components/Applynowcontact';
import ApplyNowDocs from './components/ApplyNowDocs';
import ApplynowBank from './components/ApplynowBank';
import Dashboard1 from './components/Dashboard1';

import Documentsv from './components/Documentsv';

import Document from './components/Document';

import ChangePassword from './components/ChangePassword';
import Documentdownload from './components/Documentdownload';
import ReportDescription from './components/ReportDescription';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route  exact path='/' element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="/volunteer" element={<Vlanding />} />
      <Route path="/download" element={<Documentdownload />} />
      <Route path="/apprules" element={<ApplynowRules />} />
      <Route path="/notify" element={<Notification />} />
      <Route path="/projecteditor" element={<Projectseditor />} />
      <Route path="/confirmcard" element={<Confirmation />} />
      <Route path="/cardDetails" element={<CardDetail />} />
      <Route path="/casedoc" element={<Casedoc />} />
      <Route path="/allevents" element={<AllEvent />} />
      <Route path="/vol" element={<Documentvol />} />
      <Route path="/changepass" element={<ChangePassword />} />
      <Route path="/contactus" element={<ContactPage />} />
      <Route path="/reportpage" element={<ReportPage />} />
      <Route path="/dashboardapplicant" element={<DashboardApplicant />} />
      <Route path="/paymethodoption" element={<PayMethodOptions />} />
      <Route path="/docv1" element={<Documentsv />} />
      <Route path="/docv2" element={<DocumentA />} />
      <Route path="/middlepage" element={<Middlepage />} />
      <Route path="/ques" element={<Question />} />
      <Route path="/signin" element={<SignInSignUp />} />
      <Route path="/projectdescrip" element={<ProjectDescription />} />
      <Route path="/eventdescrip" element={<EventDescription />} />
    
      <Route path="/application" element={<Application/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      

   
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/allproj" element={<AllEventPage/>} />
      <Route path="/allevent" element={<AllProjectPage/>} />
      <Route path="/appinfo" element={<ApplynowInfo/>} />
      <Route path="/cashbyhand" element={<CashByHand/>} />
      <Route path="/mobpay" element={<MobilePay_1/>} />
      <Route path="/carddet" element={<CardDetail/>} />
      <Route path="/rest" element={<ResetPasswordPage/>} />
      <Route path="/apcont" element={<Applynowcontact/>} />
      <Route path="/apadr" element={<Applynowaddress/>} />
      <Route path="/apdoc" element={<ApplyNowDocs/>} />
      <Route path="/apbank" element={<ApplynowBank/>} />
      <Route path="/dash1" element={<Dashboard1/>} />
    
    
   
      
      <Route path="/app8" element={<Document/>} />
    
    
   <Route path='/reportdescrip' element={<ReportDescription/>} />
      <Route path="/coninfo" element={<Contactinformation />} />
    </Routes>
    </BrowserRouter>
</React.StrictMode>
);

reportWebVitals();
