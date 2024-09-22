import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import WorkoutPage from './components/WorkoutPage';
import { useContext, useEffect } from 'react';
import NoOfDays from './components/NoOfDays';
import DisplayWorkout from './components/DisplayWorkout';
import { AppContext } from './context/AppContext';
import NoOfDays2 from './components/NoOfDays2';
import CustomizeWorkout from './components/CustomizeWorkout';
import SelectMuscle from './components/SelectMuscle';

function App() {

  const navigate = useNavigate();
  const {noOfDays, currentDay, setCurrentDay, muscleForDays, muscle, setMuscle, fetchData, data , musclesTypes, setMusclesTypes} = useContext(AppContext);

  useEffect( () => {
    navigate('/home')
    fetchData()
  } , []);

  useEffect( () => {
    fetchData()
  } , [currentDay])

  function removeMuscle(name){
    const newMuscles = musclesTypes.filter( (muscle) => muscle != name )
    setMusclesTypes(newMuscles);
  }

  function removeDiv(day){
    let temp = document.getElementById(`day-${day}`)
    temp.classList.add('scaleDown')
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden flex justify-center items-center">

      <video autoPlay loop muted className=' absolute top-0 -z-10'>
          <source src='bg.mp4' type="video/mp4" className=''/>
      </video>

      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/workoutPage' element={<WorkoutPage/>}/>
        <Route path='/NoOfDays' element={<NoOfDays/>}/>
        <Route path='/NoOfDays2' element={<NoOfDays2/>}/>
        <Route path='/SelectMuscle' element={<SelectMuscle removeMuscle={removeMuscle} removeDiv={removeDiv}/>}/>
        <Route path='/CustomizeWorkout' element={<CustomizeWorkout/>}/>
        <Route path='/DisplayWorkout' element={<DisplayWorkout/>}/>
      </Routes>
    </div>
  );
}

export default App;
