import React, { Component } from 'react'
import profile from '../img/profile.png'

type Props = {}

type State = {}

export default class BasicInfo extends Component<Props, State> {
  state = {}

  render() {
    return (
        <div className="basic-info" id="basic-info">
            <div className="profile-container">
                <img src={profile} />
                <a href="../downloadables/cv-alvian.pdf" download className="download">
                    <i className="fa-solid fa-download"> &nbsp;</i>
                    Download my CV</a>
            </div>
            <div className="info-container">
                <div className="info-content">
                    <span className="info-hello">Hello, I am&nbsp;</span> Alvian Zachry Faturrahman
                </div>
                <div className="info-content">Fullstack Developer | Project Manager | Curriculum Developer</div>
                <div className="experiences">
                    <div>
                        <div className="experience-company">
                            2022 - Present, Glints, Singapore
                        </div>
                        <div className="experience-title">
                            Technical Assessment Designer - Full Time
                        </div>
                        <div className="experience-content">
                            <ul>
                                <li>
                                    Lead the initiative to design a vetting system that managed to increase the recommendation to offer conversion rate from 3.8% to 8% within 2 Quarters.

                                </li>
                                <li>
                                    Collaborate on designing a product roadmap to achieve 50% recommendation to offer rate by the end of Q4.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="experience-company">
                            2020 - 2021, Glints, Singapore
                        </div>
                        <div className="experience-title">
                            Technical Curriculum Lead - Full Time
                        </div>
                        <div className="experience-content">
                            <ul>
                                <li>
                                    Managed to increase graduate’s median salary by 20% through designing a curriculum focusing on popular technologies such as nodejs, react.js, react native, and golang.
                                </li>
                                <li>
                                    Coordinating cross-departmental works to develop Industry Trainers system which resulted in a 80% placement rate within 6 months.
                                </li>
                                <li>
                                    Created guidelines for code best practices to be followed by Industry Trainers which includes: code reviews, pair programming, and mentorship practices.

                                </li>
                                <li>

                                    Continously iterate Glints Academy Bootcamp’s programs to meet different cross-departmental needs.
                                </li>
                                <li>
                                    Adapt to Covid-19 restrictions by developing a hybrid self-paced learning model with personalized support from Industry Trainers.
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <div>
                        <div className="experience-company">
                            2021, Mitra Kuadran Teknologi, Batam
                        </div>
                        <div className="experience-title">
                            Technical Lead - Part Time
                        </div>
                        <div className="experience-content">
                            <ul>
                                <li>
                                    Jumped straight into an ongoing project from day-1 to lead 8 developers and 2 UI/UX to create Enterprise Resource Planning application using NodeJs, VueJs, postgreSQL, mongoDB, and deployed using AWS and Digital Ocean.
                                </li>
                                <li>
                                    Conduct code reviews and code refactoring regularly to maintain high-quality codes.
                                </li>
                                <li>
                                    Lead efforts to communicate progress, blockers, and additional requirements between the Project Manager and the Team.

                                </li>
                            </ul>
                        </div>
                    </div> */}
                    <div>
                        <div className="experience-company">
                            2020, TalentTribe Asia, Singapore
                        </div>
                        <div className="experience-title">
                            Fullstack Developer - Full Time
                        </div>
                        <div className="experience-content">
                            <ul>
                                <li>
                                Learnt firebase, algolia, and wordpress to create an employer-based feature on the first 2 weeks of the job.
                                </li>
                                <li>
                                Redo the whole talent-facing UI to fit the new TalentTribe branding.
                                </li>
                                <li>
                                Influence product feature decisions by giving inputs and feedbacks from the technology point of view.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="experience-company">
                            2019, WebImp, Singapore
                        </div>
                        <div className="experience-title">
                            Back End Developer - Full Time
                        </div>
                        <div className="experience-content">
                            <span>I was working as a web developer using PHP with       CodeIgniter Framework. I also use jQuery to manage Front End behaviours, to consume APIs and map data on the Front End side. I also translate business processes into software logic. Also contributed to a project using NodeJs and GraphQL because of lack of manpower on the team. WebImp has been awarded as the best company to work for 2019 in Singapore by the Singapore Computer Society.</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
  }
}