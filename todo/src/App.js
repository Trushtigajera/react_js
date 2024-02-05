import { useState } from 'react';
import './App.css';

function App() {

  let [val, setval] = useState('')
  let [all, setall] = useState([])
  let [start, setstart] = useState(false)
  let [id, setid] = useState()
  let [search, setsearch] = useState("");
  let [store, setstore] = useState([])

  const btnhandle = () => {

    if (start) {
      var info = [...all]
      info[id].task1 = val
      setall(info)
      setstart(false)
    }
    else {
      setall([...all, { task1: val, completed: false }]);
      setstore([...all, { task1: val, completed: false }]);
    }
    setval("");
  }

  const delethand = (ind) => {
    var data = all.filter((ele, ind1) => {
      return ind1 != ind
    })
    setall(data)
  }

  const edithand = (ind) => {
    setval(all[ind]);
    setstart(true);
    setid(ind);
  }

  const searchHandler = () => {
    var data = all.filter((ele) => {
      return ele.task1 === search;
    });
    setall(data);
  };

  const Complete = (ind) => {
    const updated= [...all];
    updated[ind].completed = !updated[ind].completed;
    setall(updated);
    setstore(updated);
  };


  const completebtn = () => {
    let btn = store.filter((ele, ind) => {
      return ele.completed == true;
    })
    setall(btn);
  }

  const uncompletebtn = () => {
    let btn = store.filter((ele, ind) => {
      return ele.completed == false;
    })
    setall(btn);
  }

  const allbtn = () => {
    setall([...store]);
  }



  return (
    <>
      <div className='top'>
        <div className='first'>
          Enter name:
          <input type='text' value={val} onChange={(e) => setval(e.target.value)} />
        </div>
        <div className='second'>
          <input type='button' value='Add' onClick={btnhandle} />
        </div>
        <div>
          <button className='btn_1' onClick={completebtn}>Completed Tasks</button>
          <button className='btn_1' onClick={uncompletebtn}>Uncompleted Tasks</button>
          <button className='btn_1' onClick={allbtn}>All Tasks</button>
        </div>
        <input type='text' className='input_item' placeholder='Search task..' value={search} onChange={(e) => setsearch(e.target.value)} />
        <button className='btn_1' onClick={searchHandler}>Search</button>
        <table>
          <tr>
            {
              all.map((ele, ind) => {
                return (
                  <>
                    <li style={{ listStyle: "none" }}>
                      <input type="checkbox" checked={ele.completed} onChange={() => Complete(ind)} />
                      <span style={{ textDecoration: ele.completed ? 'line-through' : 'none' }}>{ele.task1}</span>
                      <button onClick={() => delethand(ind)}>Delete</button>
                      <button onClick={() => edithand(ind)}>Edit</button>
                    </li>
                  </>
                )
              })
            }
          </tr>
        </table>
      </div>
    </>
  );
}

export default App;
