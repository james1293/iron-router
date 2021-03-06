// Type definitions for iron:router.
// Project: https://atmospherejs.com/iron/router
// Definitions by:
// Dave Allen <https://github.com/fullflavedave>

declare module 'meteor/iron:router' {
  module Router {
    interface TemplateConfig {
      to?: string;
      waitOn?: boolean;
      data?: boolean;
    }

    interface TemplateConfigDico { [id: string]: TemplateConfig }

    interface GlobalConfig {
      load?: Function;
      autoRender?: boolean;
      layoutTemplate?: string;
      notFoundTemplate?: string;
      loadingTemplate?: string;
      waitOn?: any;
    }

    interface MapConfig {
      path?: string;
      // By default template is the route name, this field is the override.
      template?: string;
      layoutTemplate?: string;
      yieldTemplates?: TemplateConfigDico;
      // Can be a Function or an object literal {}.
      data?: any;
      /**
       * WaitOn can be a subscription handle, an array of subscription
       * handles or a function that returns a subscription handle
       * or array of subscription handles. A subscription handle is
       * what gets returned when you call Meteor.subscribe
       */
      waitOn?: any;
      loadingTemplate?: string;
      notFoundTemplate?: string;
      controller?: RouteController;
      action?: Function;

      // The before and after hooks can be Functions or an array of Functions
      before?: any;
      after?: any;
      load?: Function;
      unload?: Function;
      reactive?: boolean;
    }

    interface HookOptions {
      except?: string[];
    }

    interface HookOptionsDico { [id: string]: HookOptions }

    // Deprecated:  for old "Router" smart package
    function page(): void;
    function add(route: Object): void;
    function to(path: string, ...args: any[]): void;
    function filters(filtersMap: Object);
    function filter(filterName: string, options?: Object);

    // These are for Iron-Router
    function configure(config: GlobalConfig);
    function map(func: Function): void;
    function route(name: string, handler?: any, routeParams?: MapConfig);
    function path(route: string, params?: Object): string;
    function url(route: string): string;
    function go(route: string, params?: Object): void;
    function before(func: Function, options?: HookOptionsDico): void;
    function after(func: Function, options?: HookOptionsDico): void;
    function load(func: Function, options?: HookOptionsDico): void;
    function unload(func: Function, options?: HookOptionsDico): void;
    function render(template?: string, options?: TemplateConfigDico): void;
    function wait(): void;
    function stop(): void;
    function redirect(): void;
    function current(): any;

    function onRun(hook?: string, func?: Function, params?: any): void;
    function onBeforeAction(hookOrFunc?: string | Function,
                                   funcOrParams?: Function | any, params?: any): void;
    function onAfterAction(hook?: string, func?: Function, params?: any): void;
    function onStop(hook?: string, func?: Function, params?: any): void;
    function onData(hook?: string, func?: Function, params?: any): void;
    function waitOn(hook?: string, func?: Function, params?: any): void;

    var routes: Object;
    var params: any;
  }

  interface RouteController {
    render(route: string);
    extend(routeParams: Router.MapConfig);
  }

  var RouteController: RouteController;
}
