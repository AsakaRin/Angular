import { NgModule } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { IndexComponent } from './index/index.component';
import { HiddenComponent } from './hidden/hidden.component';

const routes: Routes = [
	{ path: 'home-component', component: HomeComponent },
	{ path: 'edit-component', component: EditComponent },
	{ path: 'list-component', component: ListComponent },
	{ path: 'hidden-component', component: HiddenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
