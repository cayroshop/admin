import React from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const BlankPage = () => {
    return (
        <>
            <Sidebar />
            <main class="content">
                <Navbar />


            </main>
        </>
    )
}

export default BlankPage