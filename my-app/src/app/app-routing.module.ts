import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path : 'main', component : MainComponent} ,
  {path : 'blog', component : BlogComponent},
  {path : 'blog/:id',component: BlogDetailComponent },
  {path : 'login', component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  {path :'contact' , component : ContactComponent},
  {path :'shop' ,component :ShopComponent},
  {path :'shop-detail' ,component :ShopDetailComponent},
  {path : '' , redirectTo: 'main', pathMatch: 'full'},//router mặc định
  {path : '**' , component : NotFoundComponent} // router chưa được cấu hình
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
