import { persisted } from 'svelte-persisted-store';

export const links = persisted('links', [
	{
		id: 1,
		title: 'CRM Login',
		image: '/icons/form-icon.svg',
		group: 'Sales',
		type: 'Form',
		page: 'CRM',
		save: false
	},
	{
		id: 2,
		title: 'CRM End User Procedure (EUP)',
		image: '/icons/pdf-icon.svg',
		group: 'Sales',
		type: 'PDF',
		page: 'CRM',
		save: false
	},
	{
		id: 3,
		title: 'CRM Sales Hub Features How-To',
		image: '/icons/pdf-icon.svg',
		group: 'Sales',
		type: 'PDF',
		page: 'CRM',
		save: false
	},
	{
		id: 4,
		title: 'CRM Trainings',
		image: '/icons/sharepoint-icon.svg',
		group: 'Sales',
		type: 'Files',
		page: 'CRM',
		save: false
	},
	{
		id: 5,
		title: 'Special Pricing Request (SPR) Form',
		image: '/icons/form-icon.svg',
		group: 'Sales',
		type: 'Form',
		page: 'Forms',
		save: false
	},
	{
		id: 6,
		title: 'Internal Revision Special Pricing (SPR) Request',
		image: '/icons/form-icon.svg',
		group: 'Sales',
		type: 'Form',
		page: 'Forms',
		save: false
	},
	{
		id: 7,
		title: 'GPU Solutions Product Approval Request Form',
		image: '/icons/form-icon.svg',
		group: 'Sales',
		type: 'Form',
		page: 'Forms',
		save: false
	},
	{
		id: 8,
		title: 'Solutions Approval Log',
		image: '/icons/excel-doc-icon.svg',
		group: 'Sales',
		type: 'Sheet',
		page: 'Forms',
		save: false
	},
	{
		id: 9,
		title: 'Demo Unit Request Form',
		image: '/icons/form-icon.svg',
		group: 'Sales',
		type: 'Form',
		page: 'Forms',
		save: false
	},
	{
		id: 10,
		title: 'Locked BOM Request Form',
		image: '/icons/form-icon.svg',
		group: 'Sales',
		type: 'Form',
		page: 'Forms',
		save: false
	},
	{
		id: 11,
		title: 'Failure Analysis Information/Request Form',
		image: '/icons/form-icon.svg',
		group: 'Sales',
		type: 'Form',
		page: 'Forms',
		save: false
	},
	{
		id: 12,
		title: 'Warranty Support Order Form',
		image: '/icons/form-icon.svg',
		group: 'Sales',
		type: 'Form',
		page: 'Forms',
		save: false
	},
	{
		id: 13,
		title: 'MXM Request Form',
		image: '/icons/form-icon.svg',
		group: 'Sales',
		type: 'Form',
		page: 'Forms',
		save: false
	},
	{
		id: 14,
		title: 'MXM Registration Approval Log',
		image: '/icons/excel-doc-icon.svg',
		group: 'Sales',
		type: 'Sheet',
		page: 'Forms',
		save: false
	},
	{
		id: 15,
		title: 'MXM/Embedded Registration Form',
		image: '/icons/form-icon.svg',
		group: 'Sales',
		type: 'Form',
		page: 'Forms',
		save: false
	},
	{
		id: 16,
		title: 'Networking Opportunity Form',
		image: '/icons/form-icon.svg',
		group: 'Sales',
		type: 'Form',
		page: 'Forms',
		save: false
	},
	{
		id: 17,
		title: 'vGPU Solutions Form (Partners)',
		image: '/icons/form-icon.svg',
		group: 'Sales',
		type: 'Form',
		page: 'Forms',
		save: false
	},
	{
		id: 18,
		title: 'vGPU Solutions Form (End User)',
		image: '/icons/form-icon.svg',
		group: 'Sales',
		type: 'Form',
		page: 'Forms',
		save: false
	},
	{
		id: 19,
		title: 'NVIDIA AI Enterprise (NVAIE) Form',
		image: '/icons/form-icon.svg',
		group: 'Sales',
		type: 'Form',
		page: 'Forms',
		save: false
	},
	{
		id: 20,
		title: 'Channel Inventory',
		image: '/icons/sharepoint-icon.svg',
		group: 'Sales',
		type: 'Files',
		page: 'Inventory',
		save: false
	},
	{
		id: 21,
		title: 'Daily Channel Pricing',
		image: '/icons/sharepoint-icon.svg',
		group: 'Sales',
		type: 'Files',
		page: 'Pricing',
		save: false
	},
	{
		id: 22,
		title: 'Quadro Pricing',
		image: '/icons/sharepoint-icon.svg',
		group: 'Sales',
		type: 'Files',
		page: 'Pricing',
		save: false
	},
	{
		id: 23,
		title: 'PNY Cables Pricing',
		image: '/icons/sharepoint-icon.svg',
		group: 'Sales',
		type: 'Files',
		page: 'Pricing',
		save: false
	},
	{
		id: 24,
		title: 'IGX Pricing',
		image: '/icons/sharepoint-icon.svg',
		group: 'Sales',
		type: 'Files',
		page: 'Pricing',
		save: false
	},
	{
		id: 25,
		title: 'Account/Analyst Breakdown',
		image: '/icons/excel-doc-icon.svg',
		group: 'Operations',
		type: 'Sheet',
		page: 'Analyst Info',
		save: false
	},
	{
		id: 26,
		title: 'Quote Entry End User Process (EUP)',
		image: '/icons/sharepoint-icon.svg',
		group: 'Operations',
		type: 'File',
		page: 'EUPs / Process',
		save: false
	},
	{
		id: 27,
		title: 'Software/Networking Quote Process End User Process (EUP)',
		image: '/icons/pdf-icon.svg',
		group: 'Operations',
		type: 'PDF',
		page: 'EUPs / Process',
		save: false
	},
	{
		id: 28,
		title: 'Active Programs',
		image: '/icons/pny-icon.svg',
		group: 'Marketing',
		type: 'Portal',
		page: 'Active Programs',
		save: false
	},
	{
		id: 29,
		title: 'Product Portfolio (Generic)',
		image: '/icons/pdf-icon.svg',
		group: 'Marketing',
		type: 'PDF',
		page: 'Collateral',
		save: false
	},
	{
		id: 30,
		title: 'ProViz Line Card',
		image: '/icons/pdf-icon.svg',
		group: 'Marketing',
		type: 'PDF',
		page: 'Collateral',
		save: false
	},
	{
		id: 31,
		title: 'MXM Embedded Line Card',
		image: '/icons/pdf-icon.svg',
		group: 'Marketing',
		type: 'PDF',
		page: 'Collateral',
		save: false
	},
	{
		id: 32,
		title: 'Data Center Line Card',
		image: '/icons/pdf-icon.svg',
		group: 'Marketing',
		type: 'PDF',
		page: 'Collateral',
		save: false
	},
	{
		id: 33,
		title: 'IGX Battlecard',
		image: '/icons/pdf-icon.svg',
		group: 'Marketing',
		type: 'PDF',
		page: 'Collateral',
		save: false
	},
	{
		id: 34,
		title: 'Cables Battlecard',
		image: '/icons/pdf-icon.svg',
		group: 'Marketing',
		type: 'PDF',
		page: 'Collateral',
		save: false
	},
	{
		id: 35,
		title: 'What\'s in the Box (ProViz)',
		image: '/icons/pdf-icon.svg',
		group: 'Marketing',
		type: 'PDF',
		page: 'Collateral',
		save: false
	},
	{
		id: 36,
		title: 'What\'s in the Box (Tesla)',
		image: '/icons/pdf-icon.svg',
		group: 'Marketing',
		type: 'PDF',
		page: 'Collateral',
		save: false
	},
	{
		id: 37,
		title: 'Solid State Drive (SSD) Competitor Brochure',
		image: '/icons/pdf-icon.svg',
		group: 'Marketing',
		type: 'PDF',
		page: 'Collateral',
		save: false
	},
	{
		id: 38,
		title: 'PNY Partner Education PDF',
		image: '/icons/pdf-icon.svg',
		group: 'Marketing',
		type: 'PDF',
		page: 'Google Ads',
		save: false
	},
	{
		id: 39,
		title: 'PNY Partner Education Sign-Up',
		image: '/icons/form-icon.svg',
		group: 'Marketing',
		type: 'Form',
		page: 'Google Ads',
		save: false
	},
	{
		id: 40,
		title: 'PNY Partner Government PDF',
		image: '/icons/pdf-icon.svg',
		group: 'Marketing',
		type: 'PDF',
		page: 'Google Ads',
		save: false
	},
	{
		id: 41,
		title: 'PNY Partner Government Sign-Up',
		image: '/icons/form-icon.svg',
		group: 'Marketing',
		type: 'Form',
		page: 'Google Ads',
		save: false
	},
	{
		id: 42,
		title: 'PNY Partner Healthcare PDF',
		image: '/icons/pdf-icon.svg',
		group: 'Marketing',
		type: 'PDF',
		page: 'Google Ads',
		save: false
	},
	{
		id: 43,
		title: 'PNY Partner Healthcare Sign-Up',
		image: '/icons/form-icon.svg',
		group: 'Marketing',
		type: 'Form',
		page: 'Google Ads',
		save: false
	},
	{
		id: 44,
		title: 'PNY Partner Networking PDF',
		image: '/icons/pdf-icon.svg',
		group: 'Marketing',
		type: 'PDF',
		page: 'Google Ads',
		save: false
	},
	{
		id: 45,
		title: 'PNY Partner Networking Sign-Up',
		image: '/icons/form-icon.svg',
		group: 'Marketing',
		type: 'Form',
		page: 'Google Ads',
		save: false
	},
	{
		id: 46,
		title: 'PNY Partner High Performance Computing PDF',
		image: '/icons/pdf-icon.svg',
		group: 'Marketing',
		type: 'PDF',
		page: 'Google Ads',
		save: false
	},
	{
		id: 47,
		title: 'PNY Partner High Performance Computing Sign-Up',
		image: '/icons/form-icon.svg',
		group: 'Marketing',
		type: 'Form',
		page: 'Google Ads',
		save: false
	},
	{
		id: 48,
		title: 'PNY Partner Architecture, Engineering, Construction & Operations (AECO) PDF',
		image: '/icons/pdf-icon.svg',
		group: 'Marketing',
		type: 'PDF',
		page: 'Google Ads',
		save: false
	},
	{
		id: 49,
		title: 'PNY Partner Architecture, Engineering, Construction & Operations (AECO) Sign-Up',
		image: '/icons/form-icon.svg',
		group: 'Marketing',
		type: 'Form',
		page: 'Google Ads',
		save: false
	},
	{
		id: 50,
		title: 'PNY Partner Manufacturing PDF',
		image: '/icons/pdf-icon.svg',
		group: 'Marketing',
		type: 'PDF',
		page: 'Google Ads',
		save: false
	},
	{
		id: 51,
		title: 'PNY Partner Manufacturing Sign-Up',
		image: '/icons/form-icon.svg',
		group: 'Marketing',
		type: 'Form',
		page: 'Google Ads',
		save: false
	},
	{
		id: 52,
		title: 'PNY Partner Media and Entertainment PDF',
		image: '/icons/pdf-icon.svg',
		group: 'Marketing',
		type: 'PDF',
		page: 'Google Ads',
		save: false
	},
	{
		id: 53,
		title: 'PNY Partner Media and Entertainment Sign-Up',
		image: '/icons/form-icon.svg',
		group: 'Marketing',
		type: 'Form',
		page: 'Google Ads',
		save: false
	},
	{
		id: 54,
		title: 'Pro Marketing Request',
		image: '/icons/form-icon.svg',
		group: 'Marketing',
		type: 'Form',
		page: 'Marketing Processes',
		save: false
	},
	{
		id: 55,
		title: 'Training Procedure',
		image: '/icons/sharepoint-icon.svg',
		group: 'Marketing',
		type: 'File',
		page: 'Marketing Processes',
		save: false
	},
	{
		id: 56,
		title: 'Field Marketing Request Form',
		image: '/icons/form-icon.svg',
		group: 'Marketing',
		type: 'Form',
		page: 'Marketing Processes',
		save: false
	},
	{
		id: 57,
		title: 'Event Recap Submission',
		image: '/icons/form-icon.svg',
		group: 'Marketing',
		type: 'Form',
		page: 'Marketing Processes',
		save: false
	},
	{
		id: 58,
		title: 'Where to Buy - Request to Add',
		image: '/icons/form-icon.svg',
		group: 'Marketing',
		type: 'Form',
		page: 'Marketing Processes',
		save: false
	},
	{
		id: 59,
		title: 'MDF Quick Start',
		image: '/icons/form-icon.svg',
		group: 'Marketing',
		type: 'Form',
		page: 'MDF',
		save: false
	},
	{
		id: 60,
		title: 'Marketing Support Need (Tchotchkes, Swag)',
		image: '/icons/form-icon.svg',
		group: 'Marketing',
		type: 'Form',
		page: 'MDF',
		save: false
	},
	{
		id: 61,
		title: 'MDF Proposal Request',
		image: '/icons/form-icon.svg',
		group: 'Marketing',
		type: 'Form',
		page: 'MDF',
		save: false
	},
	{
		id: 62,
		title: 'MDF Submission Word Doc',
		image: '/icons/worddoc-icon.svg',
		group: 'Marketing',
		type: 'Document',
		page: 'MDF',
		save: false
	},
	{
		id: 63,
		title: 'MDF Claim Reimbursement Form',
		image: '/icons/form-icon.svg',
		group: 'Marketing',
		type: 'Form',
		page: 'MDF',
		save: false
	},
	{
		id: 64,
		title: 'Creative Approval (for MDF)',
		image: '/icons/form-icon.svg',
		group: 'Marketing',
		type: 'Form',
		page: 'MDF',
		save: false
	},
	{
		id: 65,
		title: 'Approved Partner Registration (More Users)',
		image: '/icons/form-icon.svg',
		group: 'Marketing',
		type: 'Form',
		page: 'Partner Resources',
		save: false
	},
	{
		id: 66,
		title: 'Custom Channel Materials',
		image: '/icons/sharepoint-icon.svg',
		group: 'Marketing',
		type: 'Files',
		page: 'Partner Resources',
		save: false
	},
	{
		id: 67,
		title: 'Partner Welcome Kit',
		image: '/icons/pny-icon.svg',
		group: 'Marketing',
		type: 'Portal',
		page: 'Partner Resources',
		save: false
	},
	{
		id: 68,
		title: 'PowerPoint (PPT) Template',
		image: '/icons/powerpoint-icon.svg',
		group: 'Marketing',
		type: 'Slides',
		page: 'Presentations',
		save: false
	},
	{
		id: 69,
		title: 'Generalist Deck',
		image: '/icons/powerpoint-icon.svg',
		group: 'Marketing',
		type: 'Slides',
		page: 'Presentations',
		save: false
	},
	{
		id: 70,
		title: 'Customer Decks',
		image: '/icons/sharepoint-icon.svg',
		group: 'Marketing',
		type: 'Files',
		page: 'Presentations',
		save: false
	},
	{
		id: 71,
		title: 'Presentations',
		image: '/icons/sharepoint-icon.svg',
		group: 'Marketing',
		type: 'Files',
		page: 'Presentations',
		save: false
	},
	{
		id: 72,
		title: 'Webinars/Virtual Events',
		image: '/icons/pny-icon.svg',
		group: 'Marketing',
		type: 'Pny Pro',
		page: 'Training',
		save: false
	},
	{
		id: 73,
		title: 'PNY University',
		image: '/icons/pny-icon.svg',
		group: 'Marketing',
		type: 'Portal',
		page: 'Training',
		save: false
	},
	{
		id: 74,
		title: 'Internal Trainings',
		image: '/icons/sharepoint-icon.svg',
		group: 'Marketing',
		type: 'Files',
		page: 'Training',
		save: false
	},
	{
		id: 75,
		title: 'Microsoft Teams Training',
		image: '/icons/sharepoint-icon.svg',
		group: 'Marketing',
		type: 'Files',
		page: 'Training',
		save: false
	},
	{
		id: 76,
		title: 'Zoom Training',
		image: '/icons/sharepoint-icon.svg',
		group: 'Marketing',
		type: 'Files',
		page: 'Training',
		save: false
	},
	{
		id: 77,
		title: 'EOL Notices (Portal)',
		image: '/icons/pny-icon.svg',
		group: 'Product Marketing',
		type: 'Portal',
		page: 'EOL',
		save: false
	},
	{
		id: 78,
		title: 'EOL Notices (Folder)',
		image: '/icons/sharepoint-icon.svg',
		group: 'Product Marketing',
		type: 'Files',
		page: 'EOL',
		save: false
	},
	{
		id: 79,
		title: '',
		image: '',
		group: 'Team Backgrounds',
		type: 'Image',
		page: 'Images',
		backgroundImage: '/images/example.jpg'
	},
	{
		id: 80,
		title: '',
		image: '',
		group: 'Team Backgrounds',
		type: 'Image',
		page: 'Images',
		backgroundImage: '/images/example.jpg'
	},
]);
