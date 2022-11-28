import styled from "styled-components";
export const Container = styled.div`
  padding: 0 15%;
`;
export const OutlineBtn = styled.a`
  padding: 13px 35px;
  border-radius: 88px;
  display: inline-block;
  border: 2px solid #fff;
  font-size: 20px;
  font-weight: 500;
  outline: none;
  background-color: transparent;
  color: white;
  transition: all 0.3s ease;
  &:hover {
    background: #ffffff;
    color: #3000d6;
  }
`;

export const ImgEditor = styled.div`
  padding: 10px 20px;
  transition: background 0.2s ease;
  background: transparent;
  border: none;
  display: block;
  border-radius: 3px;
  position: relative;
  &:hover {
    cursor: pointer!important;
    background: rgba(220, 220, 220, 0.4);
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  border: 1px solid;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 50%;
  right: 52px;
  top: 30px;
  transition: all 150ms linear;
  background: #ffffff;

  &:hover {
    cursor: pointer!important;
    background: #ee0c0c!important;
    color: #ffffff!important;
  }
`;
export const ManbalarWrapperFirst = styled.div`
  width: 720px;
  height: 538px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0;
    max-width: 400px;
  }
`;
export const ManbalarWrapper = styled.div`
  width: 720px;
  height: 538px;
  position: relative;
  padding: 7%;

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.01em;
    color: #000000;
  }
`;
export const BlackOutlineBtn = styled.a`
  padding: 12px 26px;
  border-radius: 88px;
  border: 2px solid #000;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  line-height: 20px;
  background-color: transparent;
  color: black;
  transition: all 0.3s;
  position: absolute;
  bottom: 11%;
  left: 6%;
  a{
    color: black;
  }
  &:hover {
    background-color: #000;
    color: white;
    cursor: pointer;
    a{
      color: white;
    }
  }
`;
export const TestWarningOutlineBtn = styled.button`
padding: 12px 26px;
  border-radius: 88px;
  border: 2px solid #000;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  line-height: 20px;
  background-color: transparent;
  color: black;
  transition: all 0.3s;
`
export const AdvantagesCardWrapper = styled.div`
  margin-top: 20px !important;
  height: 100%;
  min-height: 410px;
  h2 {
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
  }
  text-align: center;
  background-color: #fff;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 7px 7px 5px rgba(172, 170, 170, 0.25);
    border-radius: 5px;
  }
`;
export const ForYouWrapper = styled.div`
  padding: 7% 14% 7% 7%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const TestButtonWrapper = styled.button`
  background: none;
  padding: 16px 40px;
  border: 2px solid #000000;
  border-radius: 79px;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  transition: all 0.3s linear;
  &:hover {
    background-color: #000;
    color: white;
  }
`;
export const JobsContactWrapper = styled.div`
  /* margin-top: 20px !important; */
  display: flex;
  justify-content: space-between !important ;
  height: 100%;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s ease;
  text-align: center;
  .circleImage {
    border-radius: 50%;
    background: linear-gradient(90deg,rgba(48,0,214,1) 0%,rgba(61,208,240,1) 100%);
    padding: 3px;
  }
  }

  .circleIcon {
    background-color: #000;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
  }
`;
export const AboutPageWrapper = styled.div`
  color: white;
  /* height: auto; */
  min-height: 500px;
  width: 100%;
  position: absolute;
  background: rgba(48, 2, 214, 0.72);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  /* max-width: 928px; */
`;
export const CardMiniWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(190, 190, 190, 0.25);
  border-radius: 10px;
  display: flex;
  padding: 20px;
  gap: 26px;
  margin-top: 10px;
`;
export const MainCardWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(190, 190, 190, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  min-height: 250px;
  margin-top: 15px;
  .mainImg{
    object-fit: cover;
    max-height: 200px !important;
  }
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 5%;
  .crownPosition {
    position: absolute;
    top: 5%;
    left: 7%;
    background: #fbfbfb;
    border: 1px solid #ececec;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding-top: 5px;
  }
  p {
    font-weight: 600 !important;
    font-size: 18px !important;
    line-height: 22px;
  }
`;
export const ProgressCardWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(190, 190, 190, 0.25);
  border-radius: 10px;
  min-height: 208px;
  position: relative;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const QuizformWrapper = styled.div`
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }
  .formInput {
    background: #ffffff;
    border: 1px solid rgba(199, 199, 199, 0.4);
    border-radius: 5px;
    outline: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    width: 100%;
    /* height: 100%; */
    height: 48px;
    padding: 12px;
  }
  .borderr {
    background: #ffffff;
    border: 1px solid rgba(199, 199, 199, 0.4);
    border-radius: 5px;
    padding: 12px !important;
  }
`;
export const QuizJobCardWrapper = styled.div`
  position: relative;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(190, 190, 190, 0.25);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
  min-height: 235px;
  align-items: center;
  flex-direction: column;
  text-align: center;
  .positionInput {
    position: absolute;
    top: 10px;
    right: 20px;
  }
  transition: all .3s ease;
  &:hover{
    box-shadow: 0px 5px 5px 7px rgba(190, 190, 190, 0.25);
  }
  img{
    max-height: 200px;
    min-height: 200px;
  }
`;
export const ImgWrapper = styled.div`
  border:1px solid rgba(0,0,0,0.1);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img{
    vertical-align: middle;
  }
`

export const VariantCardWrapper = styled.div`
position: relative;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(190, 190, 190, 0.25);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
  min-height: 150px;
  align-items: center;
  flex-direction: column;
  text-align: center;
  .positionInput {
    position: absolute;
    top: 10px;
    right: 20px;
  }
  transition: all .3s ease;
  &:hover{
    box-shadow: 0px 5px 5px 7px rgba(190, 190, 190, 0.25);
  }

`