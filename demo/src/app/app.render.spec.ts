import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('testing AddComponent with render', () => {
  const imports = [RouterTestingModule];
  const providers = [FormBuilder];

  it('should render app title', async () => {
    const { getByText } = await render(AppComponent, { imports, providers });

    const title = await getByText(/User/i);
    expect(title).toBeDefined();
    expect(title.innerHTML).toBe('User');
    expect(title.tagName).toBe('H1');
  });

  it('should render app with toggle', async () => {
    const { getByText } = await render(AppComponent, {
      imports,
      providers,
      componentProperties: { toggle: true },
    });

    const toggle = await getByText(/Toggle/i);
    expect(toggle).toBeDefined();
    expect(toggle.innerHTML).toBe('Toggle');
    expect(toggle.tagName).toBe('H2');
  });
});
