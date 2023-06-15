import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('testing AddComponent with render', () => {
  const imports = [RouterTestingModule];
  const providers = [FormBuilder];

  it('should render app title', async () => {
    const { getByText } = await render(AppComponent, { imports, providers });

    const title = await getByText(/App/i);
    expect(title).toBeDefined();
    expect(title.innerHTML).toBe('App');
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

    const person = await getByText(/person/i);
    expect(person).toBeDefined();
    expect(person.innerHTML).toBe('person');
    expect(person.tagName).toBe('P');

    const selected = await getByText(/selected/i);
    expect(selected).toBeDefined();
    expect(selected.innerHTML).toBe('selected:');
    expect(selected.tagName).toBe('STRONG');
  });
});
