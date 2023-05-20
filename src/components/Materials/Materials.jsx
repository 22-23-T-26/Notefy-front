import React from 'react';
import MaterialsCard from './MaterialsCard';
import MaterialsFilter from './MaterialsFilter';
import NewMaterialModal from '../Modals/NewMaterial';
import './Materials.css';
import {HiDocumentAdd} from 'react-icons/hi'
import { useState } from 'react';
const MaterialsPage = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };

    return (
        <div className='d-flex flex-row'>
            <div className='left-wrapper'>
                <div className='d-flex flex-row align-items-center gap-5'>
                    <h4 style={{display: 'inline-block'}}>Материјали</h4>
                    <HiDocumentAdd className='text-dark' size={30} onClick={openModal}/>
                </div>
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
            {showModal && (
                <NewMaterialModal showModal={showModal} handleClose={closeModal} />
            )}
        </div>
    )
}

export default MaterialsPage;