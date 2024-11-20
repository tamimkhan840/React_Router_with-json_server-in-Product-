import { Outlet, useLoaderData, useNavigation } from "react-router-dom"
import Sidebar from "./Sidebar"


function Root() {



   const categories =useLoaderData()
   const navigation = useNavigation()


  return (
    <div className="bg-slate-100 p-6 max-w-screen-2xl mx-auto grid md:grid-cols-12 gap-4">
            <Sidebar categories={categories} />
            {
              navigation.state === "loading"
               ?
               <div className="col-span-9 bg-white p-3 text-center">
                  <h1 className="text-2xl">Loading Data, Please wait</h1>
                </div>
                :
                 <Outlet />
            }

    </div>
  )
}

export default Root
