# BlackDuck

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

# Building the librray

> xpert@xpert-Inspiron-3576:~/Documents/ui-chassis/black-duck$ ng build black-duck-lib

## Output
```
Building Angular Package

------------------------------------------------------------------------------
Building entry point 'black-duck-lib'
------------------------------------------------------------------------------
Compiling TypeScript sources through ngc
Bundling to FESM2015
Bundling to FESM5
Bundling to UMD
Minifying UMD bundle
Copying declaration files
Writing package metadata
Built black-duck-lib

------------------------------------------------------------------------------
Built Angular Package!
 - from: /home/xpert/Documents/ui-chassis/black-duck/projects/black-duck-lib
 - to:   /home/xpert/Documents/ui-chassis/black-duck/dist/black-duck-lib
------------------------------------------------------------------------------
```

# Publish

Navigate into `dist/<library>` and run `npm pack`

```
xpert@xpert-Inspiron-3576:~/Documents/ui-chassis/black-duck/dist/black-duck-lib$ npm pack
npm notice 
npm notice 📦  black-duck-lib@0.0.1
npm notice === Tarball Contents === 
npm notice 1.5kB esm2015/lib/black-duck-lib.component.js           
npm notice 1.8kB esm5/lib/black-duck-lib.component.js              
npm notice 1.0kB esm2015/black-duck-lib.js                         
npm notice 1.0kB esm5/black-duck-lib.js                            
npm notice 3.4kB fesm2015/black-duck-lib.js                        
npm notice 4.4kB fesm5/black-duck-lib.js                           
npm notice 2.1kB esm2015/lib/black-duck-lib.module.js              
npm notice 2.3kB esm5/lib/black-duck-lib.module.js                 
npm notice 1.4kB esm2015/lib/black-duck-lib.service.js             
npm notice 1.6kB esm5/lib/black-duck-lib.service.js                
npm notice 5.1kB bundles/black-duck-lib.umd.js                     
npm notice 1.7kB bundles/black-duck-lib.umd.min.js                 
npm notice 1.8kB esm2015/lib/button/button.component.js            
npm notice 2.1kB esm5/lib/button/button.component.js               
npm notice 1.2kB esm2015/public-api.js                             
npm notice 1.2kB esm5/public-api.js                                
npm notice 1.5kB esm2015/lib/twitter-card/twitter-card.component.js
npm notice 1.8kB esm5/lib/twitter-card/twitter-card.component.js   
npm notice 2.4kB black-duck-lib.metadata.json                      
npm notice 582B  package.json                                      
npm notice 2.6kB fesm2015/black-duck-lib.js.map                    
npm notice 2.7kB fesm5/black-duck-lib.js.map                       
npm notice 2.7kB bundles/black-duck-lib.umd.js.map                 
npm notice 2.8kB bundles/black-duck-lib.umd.min.js.map             
npm notice 1.0kB README.md                                         
npm notice 146B  lib/black-duck-lib.component.d.ts                 
npm notice 167B  black-duck-lib.d.ts                               
npm notice 44B   lib/black-duck-lib.module.d.ts                    
npm notice 64B   lib/black-duck-lib.service.d.ts                   
npm notice 162B  lib/button/button.component.d.ts                  
npm notice 186B  public-api.d.ts                                   
npm notice 145B  lib/twitter-card/twitter-card.component.d.ts      
npm notice === Tarball Details === 
npm notice name:          black-duck-lib                          
npm notice version:       0.0.1                                   
npm notice filename:      black-duck-lib-0.0.1.tgz                
npm notice package size:  9.4 kB                                  
npm notice unpacked size: 52.7 kB                                 
npm notice shasum:        3f887ceb2de33922f8930480a48cd54089671794
npm notice integrity:     sha512-x3oyxTuCplrqu[...]gMoZum0C4rOQw==
npm notice total files:   32                                      
npm notice 
black-duck-lib-0.0.1.tgz
```


Notice the last line of above log: `black-duck-lib-0.0.1.tgz`. This is the installable file that we will use. We can use the usual command `npm i <library-path/library-name>`. Refer the step below.

# Installing library in another Angular project

```
xpert@xpert-Inspiron-3576:~/Documents/deployed/socialcoder$ npm i /home/xpert/Documents/ui-chassis/black-duck/dist/black-duck-lib/black-duck-lib-0.0.1.tgz 
npm WARN @ngx-translate/http-loader@6.0.0 requires a peer of @ngx-translate/core@>=13.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN @ngx-translate/http-loader@6.0.0 requires a peer of @angular/common@>=10.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN @ngx-translate/http-loader@6.0.0 requires a peer of rxjs@>=6.5.3 but none is installed. You must install peer dependencies yourself.
npm WARN bootstrap@4.4.1 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.
npm WARN bootstrap@4.4.1 requires a peer of popper.js@^1.16.0 but none is installed. You must install peer dependencies yourself.
npm WARN karma-jasmine-html-reporter@1.5.1 requires a peer of jasmine-core@>=3.5 but none is installed. You must install peer dependencies yourself.
npm WARN ngx-tags-input@2.0.1 requires a peer of @angular/common@^7.2.0 but none is installed. You must install peer dependencies yourself.
npm WARN ngx-tags-input@2.0.1 requires a peer of @angular/core@^7.2.0 but none is installed. You must install peer dependencies yourself.
npm WARN ngx-tags-input@2.0.1 requires a peer of @angular/forms@^7.2.0 but none is installed. You must install peer dependencies yourself.
npm WARN ngx-tags-input@2.0.1 requires a peer of ngx-bootstrap@^4.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules/watchpack/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ black-duck-lib@0.0.1
added 1 package and audited 1460 packages in 6.577s

66 packages are looking for funding
  run `npm fund` for details

found 159 vulnerabilities (66 moderate, 90 high, 3 critical)
  run `npm audit fix` to fix them, or `npm audit` for details
```

# Verify

To verify the installtion check the dependencies in `package.json` of your application (not library).

```
  "dependencies": {
    ...
    "black-duck-lib": "file:../../ui-chassis/black-duck/dist/black-duck-lib/black-duck-lib-0.0.1.tgz",
    ...
  },
```

Note: Your file path will differ from mine.

Also you can install directly using: `npm i black-duck-lib`