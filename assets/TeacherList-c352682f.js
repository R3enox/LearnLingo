import{u as h,O as G,P as g,a as W,j as e,Q as D,R as Z,T as r,I as f,U as V,N as M,V as Y,J as p,W as J,X as Q,Y as U,K as X}from"./index-98ad702d.js";const ee=h.li`
  display: flex;
  column-gap: 48px;
  padding: 24px;
  border-radius: 24px;
  background-color: #fff;
  max-width: 1184px;
  width: 100%;

  .avatar {
    width: 120x;
    height: 120px;
    border-radius: 50%;
    padding: 12px;
    border: 3px solid #fbe9ba;
  }
  .svg-wrapper {
    position: relative;
  }

  .svg-point {
    position: absolute;
    top: 23px;
    left: 87px;
    border: white 1px solid;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    fill: #38cd3e;
    display: inline-block;
  }
  .right-side {
    width: 100%;
  }

  .favorite-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 697px;
    width: 100%;
  }

  .top-wrapper {
    display: flex;
    align-items: start;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 32px;
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    margin-right: 134px;
  }

  .desc {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #8a8a89;
  }

  .title {
    white-space: nowrap;
    font-weight: 500;
    font-size: 24px;
    line-height: 1;
  }

  .card-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
  }

  .card-list-item:first-child,
  .card-list-item:nth-child(3) {
    display: flex;
    align-items: center;
  }

  .card-list li:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.2);
    padding-right: 15px;
  }

  .svg-book {
    stroke: black;
    fill: white;
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  .svg-star {
    fill: #ffc531;
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  .btn-heart-wrapper {
    border: none;
    background-color: transparent;
    margin-left: 45px;
  }

  .isFavHeart {
    width: 26px;
    height: 26px;
    fill: #f4c550;
    stroke: none;
  }

  .isNotFavHeart {
    width: 26px;
    height: 26px;
    fill: none;
    stroke: #121417;
  }

  .price {
    color: #38cd3e;
  }

  .list-info {
    width: 100%;
    max-width: 968px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
  }

  .list-info > *:last-child {
    margin-bottom: 16px;
  }

  .text-desc {
    color: #8a8a89;
  }

  .lang {
    text-decoration: underline;
  }
  .btn-more {
    background-color: transparent;
    border: none;
    padding: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    margin-bottom: 32px;
  }

  .list-lang {
    display: flex;
    flex-direction: row;
    gap: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.14;
  }

  .list-lang-item {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(18, 20, 23, 0.2);
    border-radius: 35px;
    padding: 8px 12px;
    height: 32px;
  }

  .item-level-css {
    background-color: #f4c550;
    border: none;
  }

  .exp-desc {
    max-width: 968px;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 32px;
  }

  .rev-list-item {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 32px;
  }

  .rev-name {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #8a8a89;
  }

  .star-wrapper {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
  }

  .btn-trial-lesson {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.56;
    border: none;
    border-radius: 12px;
    background-color: #f4c550;
    padding: 16px 48px;
    margin-top: 32px;
  }
`;h.svg``;const se=i=>i.favorites.favoritesTeachers,ie=h.div`
  .main-title {
    font-weight: 500;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
  }

  .desc {
    font-size: 16px;
    line-height: 1.37;
    color: rgba(18, 20, 23, 0.8);
    margin-bottom: 20px;
  }

  .rev-name {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
  }

  .teach-desc {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;
    color: #8a8a89;
  }

  .avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }

  .img-text-wrapper {
    display: flex;
    column-gap: 14px;
    margin-bottom: 40px;
  }

  .title {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.33;
    margin-bottom: 20px;
  }

  .form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .radio-group {
    display: flex;
    flex-direction: column;
    row-gap: 18px;
    font-size: 16px;
    line-height: 1.37;
    color: #121417;
  }

  .radio {
    input[type='radio'] {
      position: absolute;
      opacity: 0;
      + .radio-label {
        &:before {
          content: '';
          border-radius: 10px;
          border: 2px solid rgba(18, 20, 23, 0.2);
          display: inline-block;
          width: 20px;
          height: 20px;
          position: relative;
          top: -0.2em;
          margin-right: 1em;
          vertical-align: top;
          cursor: pointer;
          text-align: center;
          transition: all 250ms ease;
        }
      }
      &:checked {
        + .radio-label {
          &:before {
            background-color: #f4c550;
            box-shadow: inset 0 0 0 4px #fff;
          }
        }
      }
      &:focus {
        + .radio-label {
          &:before {
            outline: none;
            border-color: #f4c550;
          }
        }
      }
    }
  }

  .input-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .form-inpt {
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 12px;
    padding-left: 18px;
    max-width: 438px;
    height: 54px;

    &::placeholder {
      color: #121417;
    }
  }

  .form-btn {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.56;
    color: #121417;
    background-color: #f4c550;
    border-radius: 12px;
    border: none;
    max-width: 438px;
    height: 60px;
  }
`,ae=/^[0-9]+$/,re=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,te=G().shape({fullName:g().required("Full name is required"),email:g().matches(re,"Invalid email").required("Email is required"),phone:g().matches(ae,"Phone number must contain only digits").min(9,"Phone number must be at least 9 digits").required("Phone number is required"),reason:g().required("Reason is required")}),le=({teacher:i,closeModal:d})=>{const c=W(),{name:t,surname:l,avatar_url:u}=i;return e.jsxs(ie,{children:[e.jsx("h1",{className:"main-title",children:"Book trial lesson"}),e.jsx("p",{className:"desc",children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),e.jsxs("div",{className:"img-text-wrapper",children:[e.jsx("img",{className:"avatar",src:u,alt:`${t} ${l}`}),e.jsxs("div",{className:"text-wrapper",children:[e.jsx("p",{className:"teach-desc",children:"Your teacher"}),e.jsx("h4",{className:"rev-name",children:`${t} ${l}`})]})]}),e.jsx("h3",{className:"title",children:"What is your main reason for learning English?"}),e.jsx(D,{initialValues:{fullName:"",email:"",phone:""},validationSchema:te,onSubmit:({reason:a,fullName:n,email:v,phone:o},{resetForm:x})=>{x(),d(),c("/teachers"),x()},children:({errors:a,touched:n})=>e.jsxs(Z,{className:"form-wrapper",children:[e.jsxs("div",{className:"radio-group",children:[e.jsxs("div",{className:"radio",children:[e.jsx(r,{id:"radio-first",name:"reason",value:"Career and business",type:"radio"}),e.jsx("label",{htmlFor:"radio-first",className:"radio-label",children:"Career and business"})]}),e.jsxs("div",{className:"radio",children:[e.jsx(r,{id:"radio-second",name:"reason",value:"Lesson for kids",type:"radio"}),e.jsx("label",{htmlFor:"radio-second",className:"radio-label",children:"Lesson for kids"})]}),e.jsxs("div",{className:"radio",children:[e.jsx(r,{id:"radio-third",name:"reason",value:"Living abroad",type:"radio"}),e.jsx("label",{htmlFor:"radio-third",className:"radio-label",children:"Living abroad"})]}),e.jsxs("div",{className:"radio",children:[e.jsx(r,{id:"radio-fourth",name:"reason",value:"Exams and coursework",type:"radio"}),e.jsx("label",{htmlFor:"radio-fourth",className:"radio-label",children:"Exams and coursework"})]}),e.jsxs("div",{className:"radio",children:[e.jsx(r,{id:"radio-fifth",name:"reason",value:"Culture, travel or hobby",type:"radio"}),e.jsx("label",{htmlFor:"radio-fifth",className:"radio-label",children:"Culture, travel or hobby"})]})]}),e.jsxs("div",{className:"input-form",children:[e.jsx(r,{className:"form-inpt",name:"fullName",type:"text",placeholder:"Full Name"}),a.fullName&&n.fullName?e.jsx("div",{children:a.fullName}):null,e.jsx(r,{className:"form-inpt",name:"email",type:"email",placeholder:"Email"}),a.email&&n.email?e.jsx("div",{children:a.email}):null,e.jsx(r,{className:"form-inpt",name:"phone",type:"tel",placeholder:"Phone number"}),a.phone&&n.phone?e.jsx("div",{children:a.phone}):null]}),e.jsx("button",{className:"form-btn",type:"submit",children:"Book"})]})})]})},ne=h.div`
  .title {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.33;
  }

  .main-word {
    font-style: italic;
    font-weight: 400;
    background: #fbe9ba;
    border-radius: 8px;
    padding: 0 4px;
  }
`,oe=()=>e.jsx(ne,{children:e.jsxs("h2",{className:"title",children:["Hello, in order to add to favorites, you need to"," ",e.jsx("span",{className:"main-word",children:"Register"})," or",e.jsx("span",{className:"main-word",children:"Log in"}),"."]})}),de=({teacher:i,levelCss:d})=>{const[c,t]=f.useState(!1),[l,u]=f.useState(!0),a=V(),n=M(se),v=M(Y),[o,x]=f.useState(null),j=()=>{t(!1)},{name:N,surname:w,languages:$,levels:z,rating:E,reviews:L,price_per_hour:B,lessons_done:A,avatar_url:C,lesson_info:O,conditions:I,experience:q}=i,y=n.some(({id:s})=>s===i.id),R=s=>{if(!Array.isArray(s)||s.length===0)return"";const b=s.length-1;return s.map((m,K)=>K===b?m:m+", ").join("")},T=s=>{if(s)return s+".0"},k=s=>{x(s),t(!0)},_=()=>{u(!1)},S={BOOK:"BOOK",MESSAGE:"MESSAGE"},P=f.useMemo(()=>o==="BOOK"?e.jsx(le,{teacher:i,setIsShowModal:j,modalBody:o}):o==="MESSAGE"?e.jsx(oe,{setIsShowModal:j,modalBody:o}):null,[o,i]),H=()=>{v?a(y?Q(i):U(i)):k(S.MESSAGE)};return e.jsxs(e.Fragment,{children:[e.jsxs(ee,{children:[e.jsx("div",{className:"left-side",children:e.jsxs("div",{className:"svg-wrapper",children:[e.jsx("img",{className:"avatar",src:C,alt:`${N}, ${w}`}),e.jsx("svg",{className:"svg-point",children:e.jsx("use",{href:`${p}#icon-green-point`})})]})}),e.jsxs("div",{className:"right-side",children:[e.jsxs("div",{className:"top-wrapper",children:[e.jsxs("div",{className:"text-wrapper",children:[e.jsx("p",{className:"desc",children:"Languages"}),e.jsxs("h2",{className:"title",children:[N," ",w]})]}),e.jsxs("div",{className:"favorite-wrapper",children:[e.jsxs("ul",{className:"card-list",children:[e.jsxs("li",{className:"card-list-item",children:[e.jsx("svg",{className:"svg-book",children:e.jsx("use",{href:`${p}#icon-book`})}),e.jsx("p",{children:"Lessons online"})]}),e.jsx("li",{className:"card-list-item",children:e.jsxs("p",{children:["Lessons done: ",A]})}),e.jsxs("li",{className:"card-list-item",children:[e.jsx("svg",{className:"svg-star",children:e.jsx("use",{href:`${p}#icon-star`})}),e.jsxs("p",{children:["Rating: ",E]})]}),e.jsx("li",{className:"card-list-item",children:e.jsxs("p",{children:["Price / 1 hour:"," ",e.jsxs("span",{className:"price",children:[B,"$"]})]})})]}),e.jsx("button",{className:"btn-heart-wrapper",type:"button",onClick:H,children:e.jsx("svg",{className:y?"isFavHeart":"isNotFavHeart",children:e.jsx("use",{href:`${p}#icon-heart`})})})]})]}),e.jsxs("ul",{className:"list-info",children:[e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("span",{className:"text-desc",children:"Speaks:"})," ",e.jsx("span",{className:"lang",children:R($)})]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("span",{className:"text-desc",children:"Lesson Info:"})," ",O]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("span",{className:"text-desc",children:"Conditions: "}),I.map(s=>s+" ")]})})]}),!l&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"exp-desc",children:q}),e.jsx("ul",{className:"rev-list-item",children:L.map(({reviewer_name:s,reviewer_rating:b,comment:F},m)=>e.jsxs("li",{children:[e.jsx("h3",{className:"rev-name",children:s}),e.jsxs("div",{className:"star-wrapper",children:[e.jsx("svg",{className:"svg-star",children:e.jsx("use",{href:`${p}#icon-star`})}),e.jsx("p",{children:T(b)})]}),e.jsx("p",{children:F})]},m))})]}),l&&e.jsx("button",{className:"btn-more",onClick:_,children:"Read more"}),e.jsx("ul",{className:"list-lang",children:z.map(s=>e.jsx("li",{className:`list-lang-item ${s===d?"item-level-css":""}`,children:e.jsxs("p",{children:["#",s]})},s))}),!l&&e.jsx("button",{className:"btn-trial-lesson",onClick:()=>k(S.BOOK),children:"Book trial lesson"})]})]}),c&&e.jsx(J,{body:P,setIsShowModal:j})]})},ce=h.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,he=({teachers:i,levelCss:d})=>e.jsx(ce,{children:i.map(c=>{const t=X();return e.jsx(de,{teacher:c,levelCss:d},t)})});export{he as T,se as s};
