import React from "react";
import Linkify from "react-linkify";
// import HomeContext from "../../context/home/HomeContext";

export const MyLinkify = ({ text }) => {
  // const homeContext = useContext(HomeContext)


  // const Hightlight=(t)=>{
  //   const regex = new RegExp(homeContext.searchKey,'gi')
  //   return t.replace(regex,`<span style="color:yellow">${homeContext.searchKey}</span>`)
  // }

  // if(homeContext.searchKey){
  //   return(
  //     <div dangerouslySetInnerHTML={{ __html: Hightlight(text) }}>
  //     </div>
  //   )
  // }

  return (
    <Linkify
      componentDecorator={(decoratedHref, decoratedText, key) => (
        <a target="blank" href={decoratedHref} key={key} >
          {decoratedText}
        </a>
      )}
    >
      {text}
    </Linkify>
  );
};

