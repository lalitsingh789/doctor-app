import React, { createContext, useContext, useState } from 'react';

const SavedDoctorContext = createContext();

export const useSavedDoctors = () => useContext(SavedDoctorContext);

export const SavedDoctorProvider = ({ children }) => {
  const [savedDoctors, setSavedDoctors] = useState([]);

  const toggleSavedDoctor = (doctor) => {
    setSavedDoctors(prev => {
      const exists = prev.find(d => d._id === doctor._id);
      return exists ? prev.filter(d => d._id !== doctor._id) : [...prev, doctor];
    });
  };

  return (
    <SavedDoctorContext.Provider value={{ savedDoctors, toggleSavedDoctor }}>
      {children}
    </SavedDoctorContext.Provider>
  );
};
export default SavedDoctorContext;