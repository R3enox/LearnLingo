import{n as r,O as i,j as e}from"./index-d8cdb965.js";import{s as n,T as a}from"./TeacherList-95434126.js";const o=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: #f8f8f8;
  padding: 96px 0;
  min-width: 320px;
  max-width: 1440px;
  border-radius: 30px;
  min-height: 100vh;

  .favorite-img {
    width: 100%;
  }
  .favorites-section {
    display: flex;
    justify-content: center;
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
`;r.h1`
  color: #ffffff;
`;const t="/LearnLingo/assets/girl-fa6000a7.png",c="/LearnLingo/assets/girl@2x-06d37157.png",l="/LearnLingo/assets/girl-9730352c.webp",g="/LearnLingo/assets/girl@2x-74ba78fa.webp",f=()=>{const s=i(n);return e.jsx(o,{children:e.jsx("section",{className:"favorites-section",children:s.length===0?e.jsxs(e.Fragment,{children:[e.jsxs("picture",{children:[e.jsx("source",{type:"image/webp",srcSet:`${l} 1x, ${g} 2x`}),e.jsx("source",{type:"image/png",srcSet:`${t} 1x, ${c} 2x`}),e.jsx("img",{className:"favorite-img",srcSet:t,alt:"Girl"})]}),e.jsx("h1",{children:"You haven't added any teachers to your favorites."})]}):e.jsx(a,{teachers:s})})})};export{f as default};
