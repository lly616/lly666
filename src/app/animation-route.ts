import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

export const AnimationRoute =
trigger('routeAnimations', [
transition('* <=> *', [
  style({position: 'relative'}),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      left:0,
      top:0,
      width: '100%'
    })
  ], {optional: true}),
  query(':enter', [
    style({left: '-50%'})
  ], {optional: true}),
  query(':leave', animateChild(), {optional: true}),
  group([
    query(':leave', [
      animate('200ms ease-out', style({left: '50%',opacity:1}))
    ], {optional: true}),
    query(':enter', [
      animate('200ms ease-in', style({left: '0%',opacity:1}))
    ], {optional: true})
  ]),
  query(':enter', animateChild(), {optional: true}),
])
]);

