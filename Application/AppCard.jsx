import { Routes, Route } from 'react-router-dom';
import '../src/index.css'
import '../src/appen.css'
import LoginCard from './Login';
import VardgivarePage from './Vardgivare';

const AppCard = () => {
    return ( 
        <>
            <Routes>
                <Route path="/" element={<LoginCard />} />
                <Route path="/vardgivare" element={<VardgivarePage />} />
            </Routes>
        </> 
        );
}

export default AppCard;