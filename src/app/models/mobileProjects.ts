import ExternalLink from "./ExternalLink"
import Project from "./Project"

const mobileProjects = [
	new Project({
		name: "myTherme",
		summary: "A mobile app for the Therme Group's thermal spas.",
		date: "2022-10-31",
		projectType: "Employee",
		externalLinks: [
			new ExternalLink({
				title: "App Store",
				url: "https://apps.apple.com/ro/app/mytherme/id1334068011",
			}),
		],
		color: "#150530",
	}),
	new Project({
		name: "Body Tracking",
		summary: "Track your eating habits, not your calories",
		date: "2020-09-01",
		externalLinks: [
			new ExternalLink({
				title: "App Store",
				url: "https://apple.co/3kEkknN",
			}),
		],
		color: "#724CB2",
	}),
	new Project({
		name: "ChallengeBeat",
		summary: "Challenge yourself and your friends for better habits!",
		date: "2018-03-01",
		externalLinks: [
			new ExternalLink({
				title: "App Store",
				url: "https://apple.co/2IP3Qwr",
			}),
		],
		color: "#ff0e37",
		discontinuedAt: "2019",
	}),
	new Project({
		name: "My Travel Stories",
		summary: "Travel the world and share your journey!",
		date: "2018-10-13",
		color: "#0371b8",
		discontinuedAt: "2020",
	}),
	new Project({
		name: "Hey, Be Well!",
		summary: "Achieve your wellbeing goals.",
		date: "2018-09-01",
		projectType: "Client",
		externalLinks: [
			new ExternalLink({
				title: "App Store",
				url: "https://apple.co/36PkdkJ",
			}),
		],
		color: "#3b245f",
	}),
	new Project({
		name: "Beraria H",
		summary: "Browse for, book and check-in at events.",
		date: "2018-04-01",
		projectType: "Client",
		externalLinks: [
			new ExternalLink({
				title: "App Store",
				url: "https://itunes.apple.com/us/app/beraria-h/id1257720997?ls=1&mt",
			}),
		],
		color: "#fa8f30",
	}),

	new Project({
		name: "Idea Trackerr",
		summary:
			"Quickly jot down any idea you might have and keep track of its status and history.",
		date: "2019-04-13",
		externalLinks: [
			new ExternalLink({
				title: "App Store",
				url: "https://apple.co/36KOscf",
			}),
			new ExternalLink({
				title: "Google Play",
				url: "https://play.google.com/store/apps/details?id=com.runtimesharks.ideatracker",
			}),
		],
		color: "#077ee2",
	}),
	new Project({
		name: "Goalee",
		summary: "Your digital goal list reminder.",
		date: "2018-10-01",
		externalLinks: [
			new ExternalLink({
				title: "App Store",
				url: "https://apple.co/3f82k4h",
			}),
		],
		color: "#7161e8",
	}),
	new Project({
		name: "Card Virtual",
		summary:
			"Store and easily access your fidelity cards. Collaborative sharing list included!",
		date: "2018-03-01",
		externalLinks: [
			new ExternalLink({
				title: "App Store",
				url: "https://apple.co/3pBrddj",
			}),
		],
		color: "#fc5f25",
	}),
	new Project({
		name: "Essenza",
		summary: "A handy list of self improvement essentials and takeaways.",
		date: "2019-04-01",
		projectType: "Client",
		externalLinks: [
			new ExternalLink({
				title: "App Store",
				url: "https://itunes.apple.com/us/app/essenza/id1392962759?ls=1&mt=8",
			}),
		],
		color: "#c651a0",
	}),
	new Project({
		name: "DeinDeal",
		summary: "One of the dominating flash-sales companies in Switzerland.",
		date: "2017-09-31",
		projectType: "Employee",
		externalLinks: [
			new ExternalLink({
				title: "App Store",
				url: "https://itunes.apple.com/us/app/deindeal/id465657999",
			}),
		],
		color: "#c40e3d",
	}),
	new Project({
		name: "DeinDeal Partners",
		summary: "One of the dominating flash-sales companies in Switzerland.",
		projectType: "Employee",
		date: "2014-06-01",
		link: "https://itunes.apple.com/za/app/deindeal-partners/id892826193",
	}),
	new Project({
		name: "Puppet Anthems",
		date: "2014-06-01",
		summary:
			"The fun way to learn about national anthems, for adults and kids alike.",
		externalLinks: [
			new ExternalLink({
				title: "App Store",
				url: "https://apple.co/3faFLvV",
			}),
		],
		color: "#a91f13",
		discontinuedAt: "2016",
	}),
	new Project({
		name: "Carminder",
		date: "2013-09-01",
		summary:
			"See all your car's events at a glance and easily add a reminder, and how often you'd like to be reminded.",
		externalLinks: [
			new ExternalLink({
				title: "App Store",
				url: "https://apple.co/3kINZfL",
			}),
		],
		color: "#00a29b",
	}),
	new Project({
		name: "Expenses Planner",
		summary: "Helps you keep track of your upcoming expenses.",
		date: "2013-12-01",
		color: "#481faf",
		discontinuedAt: "2014",
	}),
]
// .sort((_, p2) => (p2.discontinuedAt ? -1 : 0))
// .sort((_, p2) => (p2.projectType !== "Own" ? -1 : 0))

export default mobileProjects
