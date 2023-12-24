import axios from 'axios';
const HOST = "http://localhost:4000"

const axiosConfig = {
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      "Access-Control-Allow-Origin": "*",
  }
};

async function getUser(userName){
  try {
    const result = await axios.get(HOST + "/user?name=" + userName)
    return result.data;

  } catch (error) {
    console.log({location:"code1",error})
    return {user: null, task:[]}
  }; 
}

async function postTask(task,user_id){
  const check = false;

  try{
    const result = await axios.post(HOST + "/task",{task,user_id,check},axiosConfig);
    return { _id:result.data, task, check};
  }

  catch(error){
    console.log({location:"code2",error})
    // Return undefined
  }
}

async function putTask(tick,task_id){

  try{
    await axios.put(HOST + "/task",{tick,task_id},axiosConfig);
    return true;
  }
  catch(error){
    console.log({location:"code3",error})
    return false
  }
}

async function patchTask(editTask,task_id){

  try{
    await axios.patch(HOST + "/task",{editTask,task_id},axiosConfig);
    return true;
  }
  catch(error){
    console.log({location:"code4",error})
    return false
  }
}

async function delTask(task_id){
  
  try{
    await axios.delete(HOST + "/task?task_id=" + task_id);
    return true;
  }
  catch(error){
    console.log({location:"code5",error})
    return false
  }
}


export {getUser,postTask,putTask,patchTask,delTask};