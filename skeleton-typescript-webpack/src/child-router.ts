import {Router, RouterConfiguration} from 'aurelia-router'

export class ChildRouter {
  heading = 'Child Router';
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: ['', 'welcome'], name: 'welcome',       moduleId: 'welcome.ts',       nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',         moduleId: 'users.ts',         nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router',  moduleId: 'child-router.ts',  nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
