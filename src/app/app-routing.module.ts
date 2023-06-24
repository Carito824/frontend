import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import {TasksComponent} from './components/tasks/tasks.component';
import {PrivateTasksComponent} from './components/private-tasks/private-tasks.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },

  { path: 'tasks',
    component: TasksComponent
  },

  { path: 'private-tasks',
    component: PrivateTasksComponent
  },
  { path: 'signin',
    component: SigninComponent
  },
  { path: 'signup',
    component: SignupComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
