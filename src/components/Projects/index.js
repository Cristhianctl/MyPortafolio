import React from 'react'
import Icons1 from '../../images/svg-2.svg';
import Icons2 from '../../images/svg-2.svg';
import Icons3 from '../../images/svg-2.svg';

import { ProjectsContainer, 
    ProjectsH1, 
    ProjectsWrapper, 
    ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP } from './ProjectsElements';

const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1> Mis Proyectos </ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard>
                    <ProjectsIcon src={Icons1} />
                    <ProjectsH2>Fibra Amazonica</ProjectsH2>
                    <ProjectsP>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icons2} />
                    <ProjectsH2>Fibra Amazonica</ProjectsH2>
                    <ProjectsP>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icons3} />
                    <ProjectsH2>Fibra Amazonica</ProjectsH2>
                    <ProjectsP>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects;
