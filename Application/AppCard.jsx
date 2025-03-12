import { useState } from 'react';
import '../src/index.css'
import '../src/appen.css'
import LoginCard from './Login';
import VardgivarePage from './Vardgivare';

const AppCard = () => {
    const [selectedRole, setSelectedRole] = useState(null);

    return (
        <>
            {selectedRole === "Vårdgivare" ? (
                <VardgivarePage />
            ) : (
                <LoginCard onSelectRole={setSelectedRole} />
            )}
        </>
    );
}

export default AppCard;