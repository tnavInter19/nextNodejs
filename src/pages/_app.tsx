import Navigation from "@/components/Navigation";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.css";
import { persistor, store } from "@/redux/store";
import Sidebar, { SidebarItem } from "@/components/Sidebar";
import { LayoutDashboard } from "lucide-react";
import TopNavBar from "@/components/TopNavBar";
import { AuthProvider } from '../context/AuthContext';
import { ConfigurationParameters } from './../generated-api/configuration';
import { BASE_PATH, BaseAPI } from './../generated-api/base';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <div className="sticky z-10 top-0 bg-gray-100 bg-opacity-0  text-white">
       <TopNavBar></ TopNavBar>
       </div>  
       <div className="flex">
  
        <Sidebar>
        <SidebarItem icon={<LayoutDashboard />} to='/jobs' text='counter' alert></ SidebarItem >
        <SidebarItem icon={<LayoutDashboard />} to='/dashboard' text='Dashboard' alert></ SidebarItem >
        </ Sidebar>
      <div className="p-4 top-16 flex-1  bg-gray-100 ">
        <main className="bg-white">
        <AuthProvider>
        <Component {...pageProps} />
        </AuthProvider>
        </main>
        </div>
        </div>
   
      </PersistGate>
    </Provider>
  );
}
