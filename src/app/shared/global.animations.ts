import {
  trigger,
  style,
  transition,
  animate,
  state,
} from '@angular/animations';

export const mapEffect = trigger('enterState', [
  state(
    'void',
    style({
      transform: 'translateY(10%)',
      opacity: 0,
    })
  ),
  transition(':enter', [
    animate(350, style({ transform: 'translateX(0)', opacity: 1 })),
  ]),
]);

export const mapInformationEffect = trigger('enterState', [
  state(
    'void',
    style({
      transform: 'translateX(-100%)',
      opacity: 0,
    })
  ),
  transition(':enter', [
    animate(350, style({ transform: 'translateX(0)', opacity: 1 })),
  ]),
]);

export const fadeInEffect = trigger('fade', [
  transition('void => *', [
    style({ opacity: 0 }),
    animate(2000, style({ opacity: 1 })),
  ]),
]);