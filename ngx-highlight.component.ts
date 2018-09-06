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
  code: any;

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

  private _highlight() {
    const el = this.tpl.nativeElement as HTMLElement;

    const code = this._initCode(this.code);
    el.textContent = code;
    hljs.highlightBlock(el);
  }

  private _initCode(code) {
    let _code = '';

    switch (this.lang) {
      case 'json': {
        if (Object.prototype.toString.call(this.code) !== '[object String]') {
          _code = this._formatJson(code);
        }
        break;
      }
      default:
        _code = this.code;
        break;
    }

    return _code;
  }

  private _formatJson(json: object): string {
    return JSON.stringify(json, null, '  ');
  }
}
