import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider( {children} ){

    const [noOfDays, setNoOfDays] = useState(-1);
    const [data, setData] = useState(null);
    const [muscle, setMuscle] = useState('biceps'); 
    const [currentDay, setCurrentDay] = useState(1);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);
    const [customizeMuscle, setCustomizeMuscle] = useState([]);

    const muscleForDays = [{
       'm' : 'biceps',
       'd' : 1
    },{
        'm' : 'chest',
        'd' : 2
     }, {
        'm' : 'forearms',
        'd' : 3
     }, {
        'm' : 'lower_back',
        'd' : 4
     }, {
        'm' : 'triceps',
        'd' : 5
     }, {
        'm' : 'glutes',
        'd' : 6
     }];

     let musclesTypes1 = ["abdominals",
      "abductors",
      "adductors",
      "biceps",
      "calves",
      "chest",
      "forearms",
      "glutes",
      "hamstrings",
      "lats",
      "lower_back",
      "middle_back",
      "quadriceps",
      "traps",
      "triceps"]

    const [musclesTypes, setMusclesTypes] = useState(musclesTypes1);

    async function fetchData () {
        setLoading(true);
          try {
            const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
              method: 'GET',
              headers: {
                'X-Api-Key': 'b8HD+OVAoIRbLmj2/LJZeA==GqWGy8KWjmsmIAzg',
                'Content-Type': 'application/json'
              }
            });
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            console.log('fetch data called and the data is ')
            setData(responseData);
            console.log(data)
          } catch (error) {
            console.error('Error:', error.message);
          }
          setLoading(false);
    }

    const value = {
        noOfDays,
        setNoOfDays,
        data,
        setData,
        muscle,
        setMuscle,
        fetchData,
        muscleForDays,
        currentDay,
        setCurrentDay,
        loading,
        setLoading,
        musclesTypes,
        musclesTypes1,
        setMusclesTypes,
        count,
        setCount,
        customizeMuscle,
        setCustomizeMuscle
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}