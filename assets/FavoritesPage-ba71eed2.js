import{n as a,N as s,j as e}from"./index-4fbab8cf.js";import{s as r,T as o}from"./TeacherList-e3f58fd9.js";const n=a.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: #f8f8f8;
  padding: 96px 0;
  max-width: 1440px;
  border-radius: 30px;

  .favorites-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn-load {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.56;
    border-radius: 12px;
    padding: 16px 48px;
    background-color: #f4c550;
    border: none;
  }
`;a.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;const i="/LearnLingo/assets/favorites-fa6000a7.png",d=()=>{const t=s(r);return e.jsx(n,{children:e.jsx("section",{className:"favorites-section",children:t.length===0?e.jsxs(e.Fragment,{children:[e.jsx("img",{srcSet:i,alt:"Girl"}),e.jsx("h1",{children:"You haven't added any teachers to your favorites."})]}):e.jsx(o,{teachers:t})})})};export{d as default};
