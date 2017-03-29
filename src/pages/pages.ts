import { LoginPage } from './login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { ReceiptPage } from '../pages/receipt/receipt';
import { StatisticsPage } from '../pages/statistics/statistics';
import { AccountPage } from '../pages/account/account';

export const FirstRunPage = LoginPage;

export const MainPage = TabsPage;

export const Tab1Root = ReceiptPage;
export const Tab2Root = StatisticsPage;
export const Tab3Root = AccountPage;