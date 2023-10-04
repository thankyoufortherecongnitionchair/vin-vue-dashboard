import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'freshcontent', component: SingleCategoryComponent },
  { path: 'category/:category/:id', component: SingleCategoryComponent },

  { path: 'post/:id', component: SinglePostComponent },
  { path: 'term-cond', component: TermsAndConditionsComponent },
  { path: 'contact', component: ContactMeComponent },
  { path: 'aboutus', component: AboutusComponent },
  // {path:'infoPage',component:infoPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
