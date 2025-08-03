import { useState,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner =() => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect (() =>{
        let ticker = setInterval(() =>{
            tick();
        },delta)

        return () => { clearInterval(ticker)};
    },[text])   

    const tick =() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0,text.length + 1);

        setText(updatedText);

        if ( isDeleting){
            setDelta(prevDelta => prevDelta /2)
    }

    if (!isDeleting && updatedText === fullText){
        setIsDeleting(true);
        setDelta(period);
         }else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta (500);
        }
    }
    return(
        <section className="banner" id="home">
             <Container>
                <Row className="align-items-center" >
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>Hi I'm Sanish Maharjan <br></br><span className="wrap">{text}</span></h1>
                    <p>I'm a final-year BCA student with a strong passion for front-end development and UI/UX design.<br></br>Currently focused on React.js, I enjoy crafting clean, user-friendly interfaces. <br></br> Aspiring to become a project manager, I'm actively sharpening both my technical and teamwork skills to thrive in dynamic, innovative environments.</p>
                    <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size ={25}/></button>
                    </Col>
                    
                </Row>
             </Container>
        </section>
    )
}