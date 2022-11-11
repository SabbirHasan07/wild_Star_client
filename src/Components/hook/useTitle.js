import React from 'react';
import { useEffect } from "react";
const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} - Wild-Star`; 

    },[title])
    return (
        <div>
            
        </div>
    );
};

export default useTitle;