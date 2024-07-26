import { createBrowserRouter, RouterProvider} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./components/App";
import Forms from "./components/Forms";
import History from "./components/History";
import TenantReceipts from "./components/Forms/TenantReceipts";
import TenantInfo from "./components/Forms/TenantInfo";
import TRinfo from "./components/Historys/TRinfo";
import TIinfo from "./components/Historys/TIinfo";


const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '',
                element: <Forms />,
                children: [
                    {
                        index: true,
                        element: <TenantReceipts />,
                      },
                    {
                      path: 'tenant-receipts',
                      element: <TenantReceipts />,
                    },
                    {
                      path: 'tenant-info-form',
                      element: <TenantInfo />,
                    },
                  ]
            },
            {
                path: "/history",
                element: <History />,
                children: [
                  {
                      index: true,
                      element: <TRinfo/>,
                    },
                  {
                    path: 'tr-info',
                    element: <TRinfo />,
                  },
                  {
                    path: 'ti-info',
                    element: <TIinfo/>,
                  },
                ]
            }
        ]
    }
]


const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router}/>

)