import { Route } from '@angular/router';
export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('../app/products/products.component').then(
        (mod) => mod.ProductsComponent,
      ),
  },
];
