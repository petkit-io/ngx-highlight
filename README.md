# ngx-highlight
angular highlight component

# Installation
```bash
npm install --save @petkit/ngx-highlight highlight.js
```

# Usage
## Import style

```scss
// Add the following code to global styles.
// if your project is created by angular-cli, you can add the following code to 'style.scss' in src dir.
@import '~highlight.js/styles/default.css';
```

Or add it to `angular.json` file

```json
...
"architect": {
  "build": {
    "options": {
      "styles": {
        "src/styles.css",
        "~highlight.js/styles/default.css"
      }
    }
  }
}
...
```

## Import Module

```ts
import { NgxHighlightModule } from '@petkit/ngx-highlight';

@NgModule({
  imports: [
    ...
    NgxHighlightModule,
  ],
})
```

