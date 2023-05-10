import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { services } from '../utils/constant';
import SingleService from './SingleService';

const Service = () => {
    const [ service, setService ] = useState({});
    const {id} = useParams();
    const [ query, setQuery ] = useState("");

    useEffect(() => {
        getQuery();
        getService();
    }, [query]);
    
    const getQuery = async () => {
        setQuery(id);
    }

    const getService = async () => {
        const data = await services[id];
        // console.log(data);
        setService(data);
    }

    return Object.keys(service).length === 0 ? "Loading" : (
      <SingleService {...service} />
  )
}

export default Service