import Tab from './Tab';
import BaseTabs from './Tabs';

type ExtendedTabs = typeof BaseTabs & {
  Tab: typeof Tab;
};

const Tabs = BaseTabs as ExtendedTabs;

Tabs.Tab = Tab;

export default Tabs;
