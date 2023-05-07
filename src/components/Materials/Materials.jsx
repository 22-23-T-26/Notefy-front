import React from 'react';
import MaterialsCard from './MaterialsCard';
import MaterialsFilter from './MaterialsFilter';
import './Materials.css';

const MaterialsPage = () => {

    return (
        <div className='d-flex flex-row'>
            <div className='left-wrapper'>
                <h4>Материјали</h4>
                <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                    <MaterialsCard/>
                    <MaterialsCard/>
                    <MaterialsCard/>
                    <MaterialsCard/>
                    <MaterialsCard/>
                    <MaterialsCard/>
                    <MaterialsCard/>
                    <MaterialsCard/>
                    <MaterialsCard/>
                    <MaterialsCard/>
                    <MaterialsCard/>
                    <MaterialsCard/>
                    <MaterialsCard/>
                    <MaterialsCard/>
                </div>
            </div>
            <div className='right-wrapper'>
                <MaterialsFilter/>
            </div>
        </div>
    )
}

export default MaterialsPage;