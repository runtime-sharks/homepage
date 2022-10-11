import React from "react"
import { Redirect, Route, Switch } from "react-router"
import DNDMe from "../components/projects/descriptions.tsx/mac/DNDMe"
import TimeProgress from "../components/projects/descriptions.tsx/mac/TimeProgress"
import BerariaH from "../components/projects/descriptions.tsx/mobile/BerariaH"
import BodyTracking from "../components/projects/descriptions.tsx/mobile/BodyTracking"
import CardVirtual from "../components/projects/descriptions.tsx/mobile/CardVirtual"
import Carminder from "../components/projects/descriptions.tsx/mobile/Carminder"
import ChallengeBeat from "../components/projects/descriptions.tsx/mobile/ChallengeBeat"
import DeinDeal from "../components/projects/descriptions.tsx/mobile/DeinDeal"
import Essenza from "../components/projects/descriptions.tsx/mobile/Essenza"
import ExpensesPlanner from "../components/projects/descriptions.tsx/mobile/ExpensesPlanner"
import Goalee from "../components/projects/descriptions.tsx/mobile/Goalee"
import HBW from "../components/projects/descriptions.tsx/mobile/HBW"
import IdeaTrackerr from "../components/projects/descriptions.tsx/mobile/IdeaTrackerr"
import MyTherme from "../components/projects/descriptions.tsx/mobile/MyTherme"
import MyTravelStories from "../components/projects/descriptions.tsx/mobile/MyTravelStories"
import PuppetAnthems from "../components/projects/descriptions.tsx/mobile/PuppetAnthems"
import FutureOfArtsAndCulture from "../components/projects/descriptions.tsx/web/FutureOfArtsAndCulture"
import RolandLeth from "../components/projects/descriptions.tsx/web/RolandLeth"
import RuntimeSharks from "../components/projects/descriptions.tsx/web/RuntimeSharks"
import TeamCards from "../components/projects/descriptions.tsx/web/TeamCards"
import TravelStories from "../components/projects/descriptions.tsx/web/TravelStories"
import Projects from "../pages/Projects"

const ProjectRouter = () => (
	<Switch>
		<Route exact path="/projects" component={Projects} />
		<Route exact path="/projects/challengebeat" component={ChallengeBeat} />
		<Route
			exact
			path="/projects/my-travel-stories"
			component={MyTravelStories}
		/>
		<Route
			exact
			path="/projects/future-of-arts-and-culture"
			component={FutureOfArtsAndCulture}
		/>
		<Route exact path="/projects/mytherme" component={MyTherme} />
		<Route exact path="/projects/body-tracking" component={BodyTracking} />
		<Route exact path="/projects/hey-be-well" component={HBW} />
		<Route exact path="/projects/beraria-h" component={BerariaH} />
		<Route exact path="/projects/idea-trackerr" component={IdeaTrackerr} />
		<Route exact path="/projects/goalee" component={Goalee} />
		<Route exact path="/projects/card-virtual" component={CardVirtual} />
		<Route exact path="/projects/essenza" component={Essenza} />
		<Route exact path="/projects/deindeal" component={DeinDeal} />
		<Route exact path="/projects/puppet-anthems" component={PuppetAnthems} />
		<Route
			exact
			path="/projects/expenses-planner"
			component={ExpensesPlanner}
		/>
		<Route exact path="/projects/carminder" component={Carminder} />
		<Route exact path="/projects/dnd-me" component={DNDMe} />
		<Route exact path="/projects/timeprogress" component={TimeProgress} />
		<Route exact path="/projects/travel-stories" component={TravelStories} />
		<Route exact path="/projects/team.cards" component={TeamCards} />
		<Route exact path="/projects/roland-s-blog" component={RolandLeth} />
		<Route exact path="/projects/our-website" component={RuntimeSharks} />
		<Route>
			<Redirect to="/projects" />
		</Route>
	</Switch>
)

export default ProjectRouter
