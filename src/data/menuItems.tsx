import { MenuItem } from "../interfaces/appInterfaces";

export const menuItems: MenuItem[] = [
    {
      name: 'Animation 101',
      icon: 'cube-outline',
      component: 'Animation101Screen'
    },
    {
      name: 'Animation 102',
      icon: 'albums-outline',
      component: 'Animation102Screen'
    },
    {
      name: 'Switches',
      icon: 'toggle-outline',
      component: 'SwitchScreen'
    },
    {
      name: 'Alerts',
      icon: 'alert-circle-outline',
      component: 'AlertScreen'
    },
    {
      name: 'TextInputs',
      icon: 'document-text-outline',
      component: 'TextInputScreen'
    },
    {
      name: 'Pull to Refresh',
      icon: 'refresh-outline',
      component: 'PullToRefreshScreen'
    },
    {
      name: 'Section list',
      icon: 'list-outline',
      component: 'CustomSectionListScreen'
    },
    {
      name: 'Modal Screen',
      icon: 'copy-outline',
      component: 'ModalScreen'
    },
    {
      name: 'Infinite Scroll Screen',
      icon: 'infinite-outline',
      component: 'InfiniteScrollScreen'
    }
  ]