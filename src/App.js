import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/includes/Navbar/Navbar";
import Footer from "./components/includes/Footer/Footer";
import Landing from "./components/pages/Landing/Landing";
import Jobs from "./components/pages/jobs";
import Job from "./components/Jobs/Job";
import Application from "./components/Jobs/Application";
import Jobpost from "./components/Jobs/Jobpost";
import CreateResume from "./components/Jobs/CreateResume";
import Resume from "./components/Jobs/Resume";
import Companies from "./components/Landing/Companies";
import Company from "./components/Landing/Company";
import Candidate from "./components/Landing/Candidate";
import CandidateDashboard from "./components/Dashboard/Candidate/Dashboard";
import RecruiterDashboard from "./components/Dashboard/Recruiter/Dashboard";
import RecruiterJobs from "./components/Dashboard/Recruiter/Jobs";
import Candidates from "./components/Dashboard/Recruiter/Candidates";
import Messages from "./components/Dashboard/Recruiter/Messages";
import Account from "./components/Dashboard/Recruiter/Account";
import SingleCandidate from "./components/Dashboard/Recruiter/SingleCandidate";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/job" component={Job} />
          <Route exact path="/application" component={Application} />
          <Route exact path="/jobpost" component={Jobpost} />
          <Route exact path="/createresume" component={CreateResume} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/jobalert" component={Resume} />
          <Route exact path="/companies" component={Companies} />
          <Route exact path="/company" component={Company} />
          <Route exact path="/recruits" component={Candidate} />
          <Route
            exact
            path="/dashboard-candidate"
            component={CandidateDashboard}
          />

          <Route
            exact
            path="/dashboard-recruiter"
            component={RecruiterDashboard}
          />

          <Route exact path="/recruiter-jobs" component={RecruiterJobs} />
          <Route exact path="/candidates" component={Candidates} />

          <Route exact path="/messages" component={Messages} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/candidate" component={SingleCandidate} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
