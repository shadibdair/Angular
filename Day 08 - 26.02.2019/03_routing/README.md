# Routing 3 main parts:

* Config to the routing (which component should be in the page - according to the link) - in `app-routing.module.ts` 
```typescript
const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"contact", component: ContactComponent},
  {path:"products", component:  ProductsComponent}
];
```

* Link to change the url - in `app.component.html`
```html
<a routerLink="/home">home</a>
<a routerLink="/contact">contact</a>
<a routerLink="/products">products</a>
```

* Place - holder (in this section we will show the component that matches the url) - in `app.component.html`
```html
<router-outlet></router-outlet>
```
