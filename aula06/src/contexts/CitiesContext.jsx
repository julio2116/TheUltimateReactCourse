import { createContext, useContext, useEffect, useState } from "react"

const CitiesContext = createContext();
const BASE_URL = 'http://localhost:8000';

function CitiesProvider({ children }) {
    const [cities, setcities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});

    useEffect(function () {
        async function fetchCities() {
            setIsLoading(true)
            try {
                const res = await fetch(`${BASE_URL}/cities`);
                const data = await res.json();
                setcities(data);
            } catch {
                alert('There was an error loading data');
            } finally {
                setIsLoading(false)
            }
        }
        fetchCities()
    }, [])

    async function getCity(id) {
        setIsLoading(true)
        try {
            const res = await fetch(`${BASE_URL}/cities/${id}`);
            const data = await res.json();
            setCurrentCity(data);
        } catch {
            alert('There was an error loading data');
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <CitiesContext.Provider value={{
                cities,
                isLoading,
                getCity,
                currentCity
            }}>
                {children}
            </CitiesContext.Provider>
        </>
    )
}
function useCities() {
    const context = useContext(CitiesContext);
    if (context === undefined) throw new Error('CitiesContext was used outside the citiesProvider')
    return context;
}
export { useCities, CitiesProvider }