import React from 'react';
import MaterialsCard from './MaterialsCard';
import MaterialsFilter from './MaterialsFilter';
import NewMaterialModal from '../Modals/NewMaterial';
import './Materials.css';
import {HiDocumentAdd} from 'react-icons/hi'
import { useState, useEffect } from 'react';
import MaterialsService from '../../services/MaterialsService';

const MaterialsPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([])
    const {GetAll} = MaterialsService()
    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };

    useEffect(()=>{
        GetAll()
        .then(pod => {
            console.log(pod)
            if(pod && pod.length>0)
                setData(pod)
        })
    },[])

    return (
        <div className='d-flex flex-row'>
            <div className='left-wrapper'>
                <div className='d-flex flex-row align-items-center gap-5'>
                    <h4 style={{display: 'inline-block'}}>Материјали</h4>
                    <HiDocumentAdd className='text-dark' size={30} onClick={openModal}/>
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                {data?.length > 0 ? (
                    data.map((item, index) => (
                    <MaterialsCard key={index} data={item} />
                    ))
                ) : (
                    <p>No data available</p>
                )}
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