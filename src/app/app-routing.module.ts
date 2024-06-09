import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  ExtraOptions,
  PreloadAllModules,
} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CounterComponent } from './components/counter/counter.component';
// import { RxjscomComponent } from './components/rxjscom/rxjscom.component';
// import { SignalsComponent } from './components/signals/signals.component';
import { PostComponent } from './components/post/post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'counter', component: CounterComponent },
  {
    path: 'posts',
    component: PostComponent,
    children: [
      { path: 'add', component: AddPostComponent },
      { path: 'edit/:id', component: EditPostComponent },
    ],
  },
  // { path: 'rxjs', component: RxjscomComponent },
  // { path: 'signal', component: SignalsComponent },
  // Add more routes as needed
];

export const AppRoutingModule: ModuleWithProviders<any> = RouterModule.forRoot(
  routes,
  {
    preloadingStrategy: PreloadAllModules,
    useHash: true,
  }
);
