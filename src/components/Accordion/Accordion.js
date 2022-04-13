import React, { useState } from "react";
import { Data } from "./Data";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionSection = styled.div`
  background: #fff;  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;  
  height:70%; 
 
`;
const Container = styled.div`  
    padding: 2rem;
    top: 10%;
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
    max-width: 900px;
`;

const Wrap = styled.div`  
  color: #0F2F66;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  text-align:left;
  cursor: pointer;

  h1 {
    padding: 1.5rem;
    font-size: 1.1rem;
    text-align: left;
  }

  span {
    margin-right: 1.5rem;
  }
`;
const Dropdown = styled.div`  
  
  width: 100%;
  max-width: 700px;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #0F2F66;
  border-top: 1px solid #0F2F66;  
  transition: all .5s ease-out;

  p {
    font-size: 1rem;
    padding: 1rem;
    color: #3B7980;
    text-align: justify;
  }
`;

const Accordion = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = (id) => {
    if (open === id) {
      return setOpen(null);
    }
    setOpen(id);
  };

  return (
    <IconContext.Provider value={{ color: "#0F2F66", size: "25px" }}>
      <AccordionSection>
        <Container>
          {Data.map((item, id) => {
            return (
              <>
                <Wrap onClick={() => toggleMenu(id)} key={id}>
                  <h1>{item.question}</h1>
                  <span>{open === id ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {open === id ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
