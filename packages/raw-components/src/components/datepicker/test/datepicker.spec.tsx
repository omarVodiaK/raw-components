import { newSpecPage } from '@stencil/core/testing';
import { WebDatepicker } from '../datepicker';

describe('datepicker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WebDatepicker],
      html: `<datepicker></datepicker>`,
    });
    expect(page.root).toEqualHtml(`
      <datepicker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </datepicker>
    `);
  });
});
