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
  height: 90%;
`;
const Container = styled.div`
  padding: 2.8rem 1.5rem;
  top: 10%;
  max-width: 1200px;
  box-shadow: 2px 10px 20px 1px rgba(153, 153, 153, 0.1);
`;

const Wrap = styled.div`
  color: #0f2f66;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  text-align: left;
  cursor: pointer;
  border-bottom: 1px solid #0f2f66;
  margin: 0.5rem auto;
  height: 100%;

  h1 {
    padding: 1rem;
    font-size: 1.1rem;
    text-align: left;
    font-weight: bold;
  }

  span {
    margin-right: 1.5rem;
    transition: all 0.3s ease-out;
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
  margin: 0 auto;
  transition: all 0.5s ease-out;

  p {
    font-size: 1.1rem;
    padding: 1rem;
    color: #0f2f66;
    text-align: justify;
    font-weight: regular;
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
