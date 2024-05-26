import React from 'react'
import "./Qualification.css"
import { Col, Container, Row } from 'react-bootstrap'
import Headerresuable from '../reusable/headerreusable/Headerresuable'
import { GiGraduateCap } from "react-icons/gi";
import Qualireusable from '../reusable/qualireusable/Qualireusable';
import { IoIosBriefcase } from "react-icons/io";

const Qualification = () => {
    return (
        <section>
            <Container>
                <div  data-aos="fade-up-left">
                <Headerresuable main="My" para="Qualifications" />
                </div>
                
                <Row>
                    <Qualireusable icon={<GiGraduateCap />} year="2015 - 2016" title="Engineering" para="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Vitae Vel Quasi Consectetur Expedita Ipsam Similique Maiores Ipsa? Error, Debitis Ullam." />
                    <Qualireusable icon={<IoIosBriefcase />} year="2018 - 2019" title="FrontEnd Developer" para="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Vitae Vel Quasi Consectetur Expedita Ipsam Similique Maiores Ipsa? Error, Debitis Ullam." />
                    <Qualireusable icon={<GiGraduateCap />} year="2016 - 2017" title="Engineering" para="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Vitae Vel Quasi Consectetur Expedita Ipsam Similique Maiores Ipsa? Error, Debitis Ullam." />
                    <Qualireusable icon={<IoIosBriefcase />} year="2019 - 2020" title="FrontEnd Developer" para="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Vitae Vel Quasi Consectetur Expedita Ipsam Similique Maiores Ipsa? Error, Debitis Ullam." />
                    <Qualireusable icon={<GiGraduateCap />} year="2017 - 2018" title="Engineering" para="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Vitae Vel Quasi Consectetur Expedita Ipsam Similique Maiores Ipsa? Error, Debitis Ullam." />
                    <Qualireusable icon={<IoIosBriefcase />} year="2020 - 2021" title="FrontEnd Developer" para="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Vitae Vel Quasi Consectetur Expedita Ipsam Similique Maiores Ipsa? Error, Debitis Ullam." />
                </Row>
            </Container>
        </section>
    )
}

export default Qualification