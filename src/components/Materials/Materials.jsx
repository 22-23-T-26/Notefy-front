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
    const [selectedPayment, setSelectedPayment] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('')
    const [filteredData, setFilteredData] = useState([]);

    const {GetAll} = MaterialsService()
    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
        setShowModal(false);
        fetchData(); // Call the function to fetch data after closing the modal
      };
    
    const fetchData = () => {
        GetAll()
        .then(pod => {
        if (pod && pod.length > 0) {
            setData(pod);
        }
        })
        .catch(error => {
        console.log(error);
        });
    };

    useEffect(() => {
      fetchData();
    }, []);
  
    useEffect(() => {
      if (selectedPayment === 'Со плаќање') {
        setFilteredData(data.filter(item => item.paymentFlag === true));
      } else if (selectedPayment === 'Бесплатно') {
        setFilteredData(data.filter(item => item.paymentFlag === false));
      } else {
        setFilteredData(data);
      }
    }, [data, selectedPayment]);

    useEffect(() => {
        if (selectedCategory === 'BOOK') {
          setFilteredData(data.filter(item => item.category === 'BOOK'));
        } else if (selectedCategory === 'SCRIPT') {
          setFilteredData(data.filter(item => item.category === 'SCRIPT'));
        } else if (selectedCategory === 'EXAM') {
            setFilteredData(data.filter(item => item.category === 'EXAM'));
        } else {
            setFilteredData(data);
        }
      }, [data, selectedCategory]);

    const handleFilterChange = (value) => {
        console.log(value)
        if(value==='BOOK' || value==='SCRIPT' || value==='EXAM')
            setSelectedCategory(value)
        else
            setSelectedPayment(value);
    };

    return (
        <div className='d-flex flex-row'>
            <div className='left-wrapper'>
                <div className='d-flex flex-row align-items-center gap-5'>
                    <h4 style={{display: 'inline-block'}}>Материјали</h4>
                    <HiDocumentAdd className='text-dark' size={30} onClick={openModal}/>
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                {filteredData?.length > 0 ? (
                    filteredData.map((item, index) => (

                    <MaterialsCard key={index} data={item} />
                    ))
                ) : (
                    <p>No data available</p>
                )}
                </div>
            </div>
            <div className='right-wrapper'>
                <MaterialsFilter onFilterChange={handleFilterChange}/>
            </div>
            {showModal && (
                <NewMaterialModal showModal={showModal} handleClose={closeModal} />
            )}
        </div>
    )
}

export default MaterialsPage;