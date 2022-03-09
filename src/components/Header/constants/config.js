import search from '../../../images/search.svg';
import offers from '../../../images/offer.svg';
import help from '../../../images/help.svg';
import signIn from '../../../images/signin.svg';
import cart from '../../../images/cart.svg';

export const headerLinksConfig = [
  {
    label: 'Search',
    icon: search,
  },
  {
    label: 'Offers',
    icon: offers,
    superScriptText: 'NEW',
  },
  {
    label: 'Help',
    icon: help,
  },
  {
    label: 'Sign In',
    icon: signIn,
  },
  {
    label: 'Cart',
    icon: cart,
  },
];

export const breadcrumbConfig = [
  {
    label: 'Home',
    isLink: true,
  },
  {
    label: 'Banglore',
    isLink: true,
  },
  {
    label: 'RTM-Banglore',
    isLink: true,
  },
  {
    label: 'Kitchens Of Punjab',
    isLink: false,
  },
];
