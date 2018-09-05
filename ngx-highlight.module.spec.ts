import { NgxHighlightModule } from './ngx-highlight.module';

describe('NgxHighlightModule', () => {
  let ngxHighlightModule: NgxHighlightModule;

  beforeEach(() => {
    ngxHighlightModule = new NgxHighlightModule();
  });

  it('should create an instance', () => {
    expect(ngxHighlightModule).toBeTruthy();
  });
});
