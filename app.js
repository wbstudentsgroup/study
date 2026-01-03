import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword,onAuthStateChanged } from
"https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

import {
 collection, addDoc, getDocs, deleteDoc, doc
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const page = document.getElementById("page");
const modal = document.getElementById("loginModal");

window.login = async ()=>{
  await signInWithEmailAndPassword(
    auth,
    email.value,
    pass.value
  );
};

onAuthStateChanged(auth,user=>{
  if(!user)return;
  modal.style.display="none";

  // ADMIN check (simple)
  if(user.email==="admin@gmail.com"){
    adminUI();
  }else{
    studentUI();
  }
});

function studentUI(){
  page.innerHTML=`
    <div class="card fade">
      <h3>Class 10th Suggestion</h3>
      <button onclick="open('https://example.com')">OPEN</button>
    </div>
  `;
}

function adminUI(){
  page.innerHTML=`
    <div class="card fade">
      <h3>Add Course</h3>
      <input id="cname" placeholder="Course name">
      <input id="clink" placeholder="Material link">
      <button onclick="addCourse()">ADD</button>
    </div>
    <div id="courses"></div>
  `;
  loadCourses();
}

window.addCourse = async ()=>{
  await addDoc(collection(db,"courses"),{
    name:cname.value,
    link:clink.value
  });
  loadCourses();
};

async function loadCourses(){
  const snap = await getDocs(collection(db,"courses"));
  let html="";
  snap.forEach(d=>{
    html+=`
      <div class="card">
        ${d.data().name}
        <button onclick="del('${d.id}')">DELETE</button>
      </div>
    `;
  });
  document.getElementById("courses").innerHTML=html;
}

window.del = async(id)=>{
  await deleteDoc(doc(db,"courses",id));
  loadCourses();
};
