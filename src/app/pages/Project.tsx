import React from "react"
import { Redirect } from "react-router"
import styled from "styled-components"
import AnimatedContainer from "../components/AnimatedContainer"
import ExternalButtons from "../components/projects/ExternalButtons"
import Gallery from "../components/projects/Gallery"
import Image from "../components/projects/Image"
import ProjectHelmet from "../components/projects/ProjectHelmet"
import macProjects from "../models/macProjects"
import mobileProjects from "../models/mobileProjects"
import webProjects from "../models/webProjects"

interface StyleProps {
	centered?: boolean
	hasImage: boolean
}

interface LinkStyle {
	color: string
}

const Project = (props: any) => {
	const param = props.match.path.replace("/projects/", "")
	const project = mobileProjects
		.concat(webProjects)
		.concat(macProjects)
		.find((p) => p.slug === param)

	if (project == null) {
		return <Redirect to="/" />
	}

	const projectType: "web" | "mobile" | "mac" = mobileProjects.includes(project)
		? "mobile"
		: webProjects.includes(project)
		? "web"
		: "mac"

	return (
		<>
			<ProjectHelmet {...project} />
			<AnimatedContainer>
				<Container {...props}>
					<header>
						<Title>
							<Link href={project.link} color={project.color}>
								{project.name}
							</Link>
						</Title>
					</header>
					<Meta hasImage={project.hasImage}>
						{project.hasImage ? <StyledImage {...project} /> : null}
						<Description centered={props.centered} hasImage={project.hasImage}>
							{props.children}
							{project.discontinuedAt !== undefined ? (
								<AnimatedContainer position={5}>
									<br />
									<br />
									<em>
										[Discontinued
										{`${
											project.discontinuedAt === ""
												? ""
												: ` as of ${project.discontinuedAt}`
										}`}
										]
									</em>
								</AnimatedContainer>
							) : null}
							<AnimatedContainer position={2}>
								<ExternalButtons {...project} />
							</AnimatedContainer>
						</Description>
					</Meta>
					{project.gallery.length > 0 ? (
						<AnimatedContainer position={3}>
							<Gallery {...project} />
						</AnimatedContainer>
					) : null}
					<More>
						<AnimatedContainer position={4}>
							You can find more of our projects{" "}
							<a href={`/#${projectType}`}>here</a>.
						</AnimatedContainer>
					</More>
				</Container>
			</AnimatedContainer>
		</>
	)
}

const Container = styled.div`
	margin-top: 4em;
`

const Title = styled.h1`
	text-align: center;
	margin-bottom: 2.5em;
	font-size: 1.6em;
	font-weight: 600;
	letter-spacing: 0.5px;
`

const Link = styled.a<LinkStyle>`
	color: ${(props) => props.color};
	border-bottom-style: hidden; /* This isn't animatable, wtf */
	border-bottom-color: transparent;
`

const Meta = styled.div<StyleProps>`
	margin-top: 3em;
	display: grid;
	grid-template-columns: repeat(${(props) => (props.hasImage ? 2 : 1)}, auto);
	grid-gap: 60px;
	justify-content: center;

	@media screen and (max-width: 950px) {
		justify-items: center;
		grid-template-columns: auto;
		text-align: center;
	}
`

const StyledImage = styled(Image)``

const Description = styled.div<StyleProps>`
	max-width: ${(props: StyleProps) => (props.hasImage ? "500px" : "700px")};
	align-self: center;
	text-align: justify;
	/* ${(props: StyleProps) =>
		props.centered ? "text-align: center;" : null}; */
`

const More = styled.div`
	text-align: center;
	padding-top: 40px;
`

export default Project
