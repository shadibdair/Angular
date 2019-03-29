# Angular Decorators
* Angular Decorators is in this syntax:`@` + `Decorators Name` + `()`
* Angular Decorators is used above classes - in order to give a special rule to the class
* Angular Decorators can get 1 parameter


## @NgModule
`@NgModule` - Marks a class as an NgModule and supplies configuration metadata
```typescript
@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

## @Component
`@Component` - Decorator that marks a class as an Angular component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.
```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
```
