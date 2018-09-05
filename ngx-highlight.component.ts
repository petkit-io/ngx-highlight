import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ViewChild,
  ElementRef,
} from '@angular/core';
import hljs from 'highlight.js';

@Component({
  selector: 'ngx-highlight',
  templateUrl: './ngx-highlight.component.html',
  styleUrls: ['./ngx-highlight.component.scss']
})
export class NgxHighlightComponent implements OnInit, OnChanges {
  @Input()
  lang: string;
  @Input()
  code: string;

  @ViewChild('tpl')
  tpl: ElementRef;

  constructor() { }

  ngOnInit() {
    this._highlight();
  }

  ngOnChanges(changes) {
    const {
      code: {
        currentValue: code,
      },
    } = changes;

    this.code = code;
    this._highlight();
  }

  _highlight() {
    const el = this.tpl.nativeElement as HTMLElement;

    el.textContent = this.code;
    hljs.highlightBlock(el);
  }
}
