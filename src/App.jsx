import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AiStore from './Pages/AiStore';
import CommingSoon from './Pages/CommingSoon';
import AppDetail from './Pages/AppDetail';
import MyApp from './Pages/MyApp';
import Register from './Pages/Auth';
import './index.css'
import AppFrame from './Pages/AppFrame';
import Apps from './Container/myAppContainer/Apps';
import Accounts from './Container/myAppContainer/Accounts';
import Themes from './Container/myAppContainer/Themes';
import Notification from './Container/myAppContainer/Notification';
import Developer from './Container/myAppContainer/Developer';
import Updates from './Container/myAppContainer/Updates'
import DeveloperPlan from './Container/myAppContainer/DeveloperPlan';
import ErrorPage from './Pages/ErrorPage';
import MAccounts from './Container/myAppContainer/mobileView/mAccounts';
import MThemes from './Container/myAppContainer/mobileView/mThemes';
import MUpdates from './Container/myAppContainer/mobileView/mUpdates';
import MDeveloperPlan from './Container/myAppContainer/mobileView/mDeveloperPlan';
import MDeveloper from './Container/myAppContainer/mobileView/mDeveloper';
import MNotification from './Container/myAppContainer/mobileView/MNotification';
import MApps from './Container/myAppContainer/mobileView/mApps';
import Agreement from './Container/myAppContainer/Agreement';
import MAgreement from './Container/myAppContainer/mobileView/MAgreement';
import UniversalML from './Pages/UniversalML';


function App() {

    return (
        <Routes>
            <Route path="/ai-store" element={<AiStore />} />
            <Route path="/" element={<CommingSoon />} />
            <Route path="/register" element={<Register />} />
            <Route path="/app-detail" element={<AppDetail />} />
            <Route path="/home" element={<UniversalML />} />

            <Route path="/my-app" element={<MyApp />} >
                <Route path="" element={<Apps />} />
                <Route path="accounts" element={<Accounts />} />
                <Route path="themes" element={<Themes />} />
                <Route path="notifications" element={<Notification />} />
                <Route path="developers" element={<Developer />} />
                <Route path="developer/plan" element={<DeveloperPlan />} />
                <Route path="updates" element={<Updates />} />
                <Route path="agreement" element={<Agreement />} />
            </Route>

            {/* For Mobile View */}
            <Route path="/my-app/accounts/mobile" element={<MAccounts />} />
            <Route path="/my-app/mobile" element={<MApps />} />
            <Route path="/my-app/themes/mobile" element={<MThemes />} />
            <Route path="/my-app/notifications/mobile" element={<MNotification />} />
            <Route path="/my-app/developers/mobile" element={<MDeveloper />} />
            <Route path="/my-app/developer/plan/mobile" element={<MDeveloperPlan />} />
            <Route path="/my-app/updates/mobile" element={<MUpdates />} />
            <Route path="/my-app/agreement/mobile" element={<MAgreement />} />

            <Route path="/ai-app" element={<AppFrame />} />
            <Route path="/error" element={<ErrorPage />} />

        </Routes>
    );
}

export default App;
