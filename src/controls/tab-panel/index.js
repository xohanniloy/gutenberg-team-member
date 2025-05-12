import { TabPanel } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import './style.scss';

const TabPanelControl = ({ tabs }) => {
	const tabItems = tabs.map((tab) => ({
		name: tab.name,
		title: (
			<Fragment>
				{tab.icon && (
					<span
						className={`dashicons dashicons-${tab.icon}`}
						style={{ marginRight: '5px' }}
					/>
				)}
				{tab.title}
			</Fragment>
		),
		className: tab.className,
	}));

	return (
		<TabPanel
			className="bwd-tab-panel"
			activeClass="active-tab"
			initialTabName={tabs[0].name}
			tabs={tabItems}
		>
			{(tabContent) => {
				const selectedTab = tabs.find(
					(tab) => tab.name === tabContent.name
				);
				return (
					<Fragment>{selectedTab && selectedTab.components}</Fragment>
				);
			}}
		</TabPanel>
	);
};

export default TabPanelControl;
