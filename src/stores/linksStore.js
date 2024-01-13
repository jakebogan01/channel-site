import { persisted } from 'svelte-persisted-store';

export const links = persisted('links', [
	{
		id: 1,
		title: 'CRM Login',
		image: '/icons/sharepoint-icon.svg',
		group: 'Sales',
		type: 'Image'
	},
	{
		id: 2,
		title: 'CRM End User Procedure (EUP)',
		image: '/icons/excel-sheet-icon.svg',
		group: 'Sales',
		type: 'Document'
	},
	{
		id: 3,
		title: 'CRM Sales Hub Features How-To',
		image: '/icons/sharepoint-icon.svg',
		group: 'Sales',
		type: 'Image'
	},
	{
		id: 4,
		title: 'CRM Trainings',
		image: '/icons/pdf-icon.svg',
		group: 'Sales',
		type: 'PDF'
	},
	{
		id: 5,
		title: 'Special Pricing Request (SPR) Form',
		image: '/icons/form-icon.svg',
		group: 'Sales',
		type: 'PNY Website'
	},
	{
		id: 6,
		title: 'Internal Revision Special Pricing (SPR) Request',
		image: '/icons/word-doc-icon.svg',
		group: 'Sales',
		type: 'Image'
	},
	{
		id: 7,
		title: 'Daily Channel Pricing',
		image: '/icons/pdf-icon.svg',
		group: 'Sales',
		type: 'PDF'
	},
	{
		id: 8,
		title: 'Quadro Pricing',
		image: '/icons/pdf-icon.svg',
		group: 'Sales',
		type: 'Document'
	},
	{
		id: 9,
		title: 'IGX Pricing',
		image: '/icons/form-icon.svg',
		group: 'Sales',
		type: 'Document'
	},
	{
		id: 10,
		title: 'Quote Entry End User Process (EUP)',
		image: '/icons/sharepoint-icon.svg',
		group: 'Sales',
		type: 'Form'
	},
	{
		id: 11,
		title: 'ProViz Line Card',
		image: '/icons/sharepoint-icon.svg',
		group: 'Sales',
		type: 'PNY Website'
	},
	{
		id: 12,
		title: 'Data Center Line Card',
		image: '/icons/sharepoint-icon.svg',
		group: 'Sales',
		type: 'Image'
	},
	{
		id: 13,
		title: 'Field Marketing Request Form',
		image: '/icons/excel-sheet-icon.svg',
		group: 'Sales',
		type: 'PDF'
	},
	{
		id: 14,
		title: 'PNY Partner Healthcare PDF',
		image: '/icons/word-doc-icon.svg',
		group: 'Sales',
		type: 'PDF'
	},
	{
		id: 15,
		title: 'Event Recap Submission',
		image: '/icons/sharepoint-icon.svg',
		group: 'Sales',
		type: 'Blog'
	},
	{
		id: 16,
		title: 'Where to Buy - Request to Add',
		image: '/icons/pdf-icon.svg',
		group: 'Sales',
		type: 'Image'
	},
	{
		id: 17,
		title: 'MDF Claim Reimbursement Form',
		image: '/icons/pdf-icon.svg',
		group: 'Sales',
		type: 'Form'
	},
	{
		id: 18,
		title: 'Creative Approval (for MDF)',
		image: '/icons/sharepoint-icon.svg',
		group: 'Sales',
		type: 'Form'
	},
	{
		id: 19,
		title: 'EOL Notices (Folder)',
		image: '/icons/sharepoint-icon.svg',
		group: 'Sales',
		type: 'Image'
	},
	{
		id: 20,
		title: 'EOL Notices (Portal)',
		image: '/icons/form-icon.svg',
		group: 'Sales',
		type: 'PDF'
	}
]);
