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
                    <ProjectsH2>Paginas Web</ProjectsH2>
                    <ProjectsP> Creacion de paginas de todo tipo para cualquier rubro y negocio.</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icons2} />
                    <ProjectsH2>Desarrollo Movil</ProjectsH2>
                    <ProjectsP> Creacion aplicaciones moviles de todo tipo para cualquier rubro y negocio.</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icons3} />
                    <ProjectsH2>Software Libre </ProjectsH2>
                    <ProjectsP> Creacion de software </ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects
