import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'pinicial',
    loadChildren: () => import('./pinicial/pinicial.module').then( m => m.PinicialPageModule)
  },
  {
    path: 'plano-de-treino',
    loadChildren: () => import('./plano-de-treino/plano-de-treino.module').then( m => m.PlanoDeTreinoPageModule)
  },
  {
    path: 'exerc-person',
    loadChildren: () => import('./exerc-person/exerc-person.module').then( m => m.ExercPersonPageModule)
  },
  {
    path: 'forca',
    loadChildren: () => import('./forca/forca.module').then( m => m.ForcaPageModule)
  },
  {
    path: 'cardio',
    loadChildren: () => import('./cardio/cardio.module').then( m => m.CardioPageModule)
  },
  {
    path: 'circuito',
    loadChildren: () => import('./circuito/circuito.module').then( m => m.CircuitoPageModule)
  },
  {
    path: 'dificuldade1',
    loadChildren: () => import('./dificuldade1/dificuldade1.module').then( m => m.Dificuldade1PageModule)
  },
  {
    path: 'dificuldade2',
    loadChildren: () => import('./dificuldade2/dificuldade2.module').then( m => m.Dificuldade2PageModule)
  },
  {
    path: 'dificuldade3',
    loadChildren: () => import('./dificuldade3/dificuldade3.module').then( m => m.Dificuldade3PageModule)
  },
  {
    path: 'forca-int',
    loadChildren: () => import('./forca-int/forca-int.module').then( m => m.ForcaIntPageModule)
  },
  {
    path: 'forca-ava',
    loadChildren: () => import('./forca-ava/forca-ava.module').then( m => m.ForcaAvaPageModule)
  },
  {
    path: 'cardio-int',
    loadChildren: () => import('./cardio-int/cardio-int.module').then( m => m.CardioIntPageModule)
  },
  {
    path: 'cardio-ava',
    loadChildren: () => import('./cardio-ava/cardio-ava.module').then( m => m.CardioAvaPageModule)
  },
  {
    path: 'circuito-int',
    loadChildren: () => import('./circuito-int/circuito-int.module').then( m => m.CircuitoIntPageModule)
  },
  {
    path: 'circuito-ava',
    loadChildren: () => import('./circuito-ava/circuito-ava.module').then( m => m.CircuitoAvaPageModule)
  },
  {
    path: 'apoio',
    loadChildren: () => import('./apoio/apoio.module').then( m => m.ApoioPageModule)
  },
  {
    path: 'evolucao',
    loadChildren: () => import('./evolucao/evolucao.module').then( m => m.EvolucaoPageModule)
  },
  {
    path: 'tabela',
    loadChildren: () => import('./tabela/tabela.module').then( m => m.TabelaPageModule)
  },
  {
    path: 'chest',
    loadChildren: () => import('./chest/chest.module').then( m => m.ChestPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
