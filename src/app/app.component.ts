import { Component,OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { RouterOutlet,Router,NavigationEnd } from '@angular/router';
import { AnimationRoute } from './animation-route';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [AnimationRoute]
})
export class AppComponent implements OnInit {
  title = 'game-dock';
  routerState = true;
  routerStateCode = 'active';

  constructor(private primeNGConfig: PrimeNGConfig,private router: Router) {}

  animationRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationName'];
  }

  ngOnInit(): void {
      this.primeNGConfig.ripple = true;
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          // 每次路由跳转改变状态
          this.routerState = !this.routerState;
          this.routerStateCode = this.routerState ? 'active' : 'inactive';
        }
      });
  }
}
