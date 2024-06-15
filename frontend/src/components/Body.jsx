import styled from "styled-components";
import img from '../assets/image.png';

const StyledBody = styled.header` 

 .body-content{
    display: flex;
    width : 100%;
    padding : 20px;
    margin-top : 50px;
  }
  .text {
    width: 40%;
    background: linear-gradient(135deg, #9cd7dc, #6fb3b8);
    border: 2px solid #6fb3b8;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 500px;
    color: rgb(98, 100, 103);
    transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
    border-radius: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
 
  .text:hover {
    transform: rotateY(20deg);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  .text:hover::before {
    opacity: 1;
  }
  
  .text:nth-child(2):hover {
    transform: rotateY(-20deg); 
  }

 .Explore-btn {
  margin: 10px;
  margin-top: 30px;
  padding: 10px 20px;
  border-radius: 5px; 
  border: none;
  background: linear-gradient(45deg, #6ee7b7, #3aafa9); 
  color: white;
  font-size: large;
  font-weight: bold; 
  cursor: pointer; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /
  transition: all 0.3s ease; 
}

.Explore-btn:hover {
  background: linear-gradient(45deg, #3aafa9, #2b7a78); 
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); 
  transform: translateY(-2px); 
  cursor:pointer;
}

.Explore-btn:active {
  transform: translateY(0); 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
}

 .img-class{
  width : 40%;
  margin : auto;
  }

.img {
  width: 450px;
  height: auto;
  opacity: 0.8;
  transition: transform 0.3s ease, box-shadow 0.3s ease; 
}

.img:hover {
  transform: scale(1.05); 
  opacity: 1;
}


@media (max-width: 768px) {
    .body-content {
        flex-direction: column;
    }

    .text, .img {
        width: 100%;
        margin-bottom: 20px;
    }
}


`;


const Body = () => {
    return (
        <>
        <div>
            <StyledBody>
                <div className="body-content">
                    <div className="text">
                        <h1>Learning Plateform</h1><br></br>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, recusandae alias. Debitis, architecto! Libero ad ab facilis qui saepe sit nisi nesciunt est cupiditate ipsum. Ad eum dolore quis perspiciatis.</p>
                        <button className="Explore-btn">Explore More</button>
                    </div>
                    <div className="img-class">
                        <img className="img" src ={img} ></img>
                    </div>
                </div>
            </StyledBody>
        </div>

        </>
    );

}

export default Body;