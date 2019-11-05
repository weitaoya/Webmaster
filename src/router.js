import  React from 'react'
import {HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import Loadable from './utils/loadable'
const Login=Loadable(()=>import('./pages/login/login'))
const Admin=Loadable(()=>import('./pages/admin/admin'))
const Ad=Loadable(()=>import('./pages/ad/ad'))
const Cal=Loadable(()=>import('./pages/cal/cal'))
const Message=Loadable(()=>import('./pages/message/message'))
const Hom=Loadable(()=>import('./pages/home/home'))
const Foodlist=Loadable(()=>import('./pages/foodlist/foodlist'))
class Router extends React.Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                   <Redirect exact from='/' to='/admin'></Redirect>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' component={()=>{
                        return(
                            <Admin>
                                 <Route path='/admin/home' component={Hom}></Route>
                                 <Route path='/admin/ad' component={Ad}></Route>
                                 <Route path='/admin/cal' component={Cal}></Route>
                                 <Route path='/admin/message' component={Message}></Route>
                                 <Route path='/admin/foodlist' component={Foodlist}></Route>
                            </Admin>
                        )
                    }}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
export default Router